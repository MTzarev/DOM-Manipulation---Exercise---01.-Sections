function create(words) {
   let content = document.getElementById(`content`);
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement(`div`);
      let paragraph = document.createElement(`p`)
      paragraph.textContent = words[i];
      paragraph.style.display = `none`;
      div.appendChild(paragraph);
      content.appendChild(div);
   }
   content.addEventListener(`click`, function (e) {
      
      if ((e.target.tagName === `DIV`) || e.target.tagName === `P`) {
         let p = e.target.children[0] || e.target;
         let isVisible = p.style.display === `block`;
         p.style.display = isVisible ? `none` : `block`;

      }

   })
}
