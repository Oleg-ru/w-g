// запоминаем область перетаскивания файлов
const dropFileZone = document.querySelector(".upload-zone__dragover");
// запоминаем инпут для выбора файлов
const uploadInput = document.getElementById("upload-form__file");
// запоминаем блок для выведения информации о загруженных файлах
const filesInfoElement = document.getElementById("file-info");
// Элемент для отображения информации об отправленных файлах
const filesSentElement = document.getElementById("files-sent");
// Элемент для отображения информации о файлах
const fileListElement = document.getElementById("file-list");
// запоминаем кнопку отправки
const submitButton = document.querySelector(".form-upload__submit");

// document.addEventListener('dragover', (event) => {
//   event.preventDefault();
// })
//
// document.addEventListener('drop', (event) => {
//   event.preventDefault();
// })

['dragover', 'drop'].forEach(event => {
  document.addEventListener(event, (e) => {
    e.preventDefault();
  })
});

dropFileZone.addEventListener('dragenter', () => {
  dropFileZone.classList.add('active')
})

dropFileZone.addEventListener('dragleave', () => {
  dropFileZone.classList.remove('active')
})

dropFileZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropFileZone.classList.remove('active')
  filesSentElement.style.display = 'none'
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    saveFilesToInput(files) //Save файлы в input
    displayFilesInfo(files)
  }
})

function saveFilesToInput(files) {
  const allFiles = Array.from(uploadInput.files);
  allFiles.push(...files);

  const tempInput = new DataTransfer();
  allFiles.forEach(file => tempInput.items.add(file))

  uploadInput.files = tempInput.files;
  console.log(uploadInput.files)
}

uploadInput.addEventListener('change', () => {
  filesSentElement.style.display = 'none'
  const files = uploadInput.files;
  if (files.length > 0) {
    displayFilesInfo(files)
  }
})

function displayFilesInfo(files) {
  filesInfoElement.style.display = 'block';
  submitButton.style.display = 'block';
  for (const file of files) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
<span>Загружен файл "${file.name}"</span> <br/>
<span>Размером "${file.size}"</span>
`
    fileListElement.append(listItem);
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const files = uploadInput.files;
  filesSentElement.style.display = 'block';
  submitButton.style.display = 'none';

  const filesInfo = Array.from(files).map(file => ({
    name: file.name,
    size: file.size,
    type: file.type
  }));

  console.log('Файлы отправлены:', filesInfo);
  
  clearUploadInput();
  
  fileListElement.innerHTML = ``;
  filesInfoElement.innerHTML = ``;
  filesInfoElement.style.display = 'none';
})

function clearUploadInput() {
  const tempInput = new DataTransfer();
  uploadInput.files = tempInput;
}