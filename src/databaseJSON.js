const initDatabase = () =>{ var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !==4){

    return;
  }
  if (request.status === 200){
    const outputJSON = request.responseText;
    console.warn(outputJSON, request.responseText)
    return outputJSON;
  }
  else {
    console.warn('error');
  }
}
request.open('GET', 'https://maxtonsc.github.io/app.json');
request.send();

}

export const getDatabase = () => {
  return initDatabase()
}
