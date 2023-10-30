const IMAGE_HEIGHT = 160;
const IMAGE_WIDTH = 160;
const CLASS_NAMES = [
  "alfa_c43",
  "alphatauri_at04",
  "alpine_a523",
  "aston_amr23",
  "ferrari_sf23",
  "haas_vf23",
  "mclaren_mcl60",
  "mercedes_w14",
  "redbull_rb19",
  "williams_fw45",
];
const CAR_NAME = {
  "alfa_c43": "Alfa Romeo C43",
  "alphatauri_at04": "Alpha Tauri AT04",
  "alpine_a523": "Alpine A523",
  "aston_amr23": "Aston Martin AMR23",
  "ferrari_sf23": "Ferrari SF23",
  "haas_vf23": "Haas VF23",
  "mclaren_mcl60": "McLaren MCL60",
  "mercedes_w14": "Mercedes W14",
  "redbull_rb19": "Red Bull RB19",
  "williams_fw45": "Williams FW45",
}

const input = document.querySelector("input");
const preview = document.querySelector(".preview");

let model;

async function loadMobileNetFeatureModel() {
  const URL = "model/model.json";
  model = await tf.loadGraphModel(URL);
}

loadMobileNetFeatureModel();

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;

  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const para = document.createElement("p");
    const result = document.createElement("h5");
    let file = curFiles[0];
    if (validFileType(file)) {
      para.textContent = `File name: ${file.name}`;
      const image = new Image();
      image.classList.add("img-fluid");
      image.classList.add("rounded");
      image.src = URL.createObjectURL(file);

      image.onload = function () {
        image.width = this.width;
        image.height = this.height;
        preview.appendChild(image);
        preview.appendChild(para);

        let prediction = makePrediction(image);
        let predictionText = CAR_NAME[prediction.prediction];
      
        result.classList.add("h5");
        result.classList.add("text-decoration-underline");
        result.textContent = `Predicting ${predictionText} with ${prediction.confidence}% certainty`;
        preview.appendChild(result);
      };
    } else {
      para.textContent = `File name: ${file.name}: Not a valid file type. Update your selection.`;
      preview.appendChild(para);
    }
  }
}

function makePrediction(image) {
  return tf.tidy(function () {
    let imageAsTensor = tf.browser.fromPixels(image);
    let resizedImageTensor = tf.image.resizeBilinear(
      imageAsTensor,
      [IMAGE_HEIGHT, IMAGE_WIDTH],
      true
    );
    // let normalizedTensorFrame = resizedImageTensor.div(255);
    let normalizedTensorFrame = resizedImageTensor;
    let prediction = model
      .predict(normalizedTensorFrame.expandDims()).squeeze();
    let highestIndex = prediction.argMax().arraySync();
    let predictionArray = prediction.softmax().arraySync();
    let predictionName = CLASS_NAMES[highestIndex];
    let predictionConfidence = Math.floor(predictionArray[highestIndex] * 100);

    return { prediction: predictionName, confidence: predictionConfidence };
  });
}

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
