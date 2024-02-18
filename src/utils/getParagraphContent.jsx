function isStringEmpty(str) {
    // Utilisez trim() pour supprimer les espaces en début et en fin de chaîne
    const trimmedStr = str.trim();
    
    // Vérifiez si la chaîne résultante est vide
    return trimmedStr.length === 0;
  }

export function getParagraphContent(htmlText) {
    // Créez un élément DOM à partir de la chaîne HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
  
    // Sélectionnez tous les éléments <p>
    const paragraphs = doc.querySelectorAll('p');
  
    // Vérifiez s'il y a au moins deux éléments <p>
    if (paragraphs.length >= 2) {
      // Accédez au contenu textuel du deuxième élément <p>
      const secondParagraphContent = paragraphs[1].textContent;

      if (isStringEmpty(secondParagraphContent)) {
        
        const thirdParagraphContent = paragraphs[0].textContent;
        return thirdParagraphContent;
      }
      else {

        return secondParagraphContent;
      }
      
    } else {

        const paragraph = doc.querySelector('p');
        return paragraph.textContent;
    }
}