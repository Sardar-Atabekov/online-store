


add('body', 'header');
add('body', 'main');
addTags('main','div','id','container');

/*   Я хотел контейнеров добавить с помоьщю react комнанентов...
 *   
 *   А fetch запрос сделать в ванильном js
 *   
 *   Но это почему-то не работаеть..
 *  
 *   Я технически несмогу сделать это в react.)
 *   У меня нету компьютера который я смог скачать react и работать...
 *  
 *  add('#body', 'header');
 *  add('#wrapper', 'main');
 */
     
    fetch('http://46.101.146.101:8081/universities/')
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON);
            responseJSON.forEach(date=>{

                // Насчет кнопки думаю, будет лучше если там блок будет ссылкой..
                // Могу сделать блок ссылкой..
                let container = addTags ('#container','div','class','content');
                addTag(container, 'img','src', date.main_image_url,'class','images');
                addTag(container, 'h3', 'class', 'title', date.title);
                let description = addTag(container,'div','class','description_content');
                addTag(description, 'p', 'class', 'description', date.description);
            });

     });
    













function add( containerName, tag, content = '' ) {
    let tagName = document.createElement(tag);
    let container = document.querySelector(containerName);
    tagName.innerHTML = content;
    container.appendChild(tagName);
}

function addTags(containerName, TagName, Attribute, AttributeName, Attribute_or_Content='', Attribute_Name1) {

    /*  containerName - Имя контейнера который будем добавить тег
    *   TagName - Тег который будем добавлить П: p, div и т.д.
    *   Attribute - Атрибут тега который будем устаноливать
    *   AttributeName - Имя или тип атрибута
    *   Attribute_or_Content - 2-атрибут для тегов input, video  т.д. Или контент для тегов p, div и т.д.
    *   Attribute_Name1 - Имя или тип 2-го атрибута
    */

    // Создаем новый тег 
    let tag=document.createElement(TagName);

    // Определаем куда будем добавлять тег
    let container=document.querySelector(containerName);
    
     if ( TagName =='input' || TagName =='img' || TagName=='video' || TagName=='audio' || TagName=='iframe ' ) {
        tag.setAttribute(Attribute, AttributeName);
        tag.setAttribute(Attribute_or_Content, Attribute_Name1);
        container.appendChild(tag);
        return tag;
    } else {
        tag.setAttribute(Attribute, AttributeName);
        tag.innerHTML= Attribute_or_Content;
        container.appendChild(tag);
        return tag;
    }
    
}

function addTag (container, TagName, Attribute, AttributeName, Attribute_or_Content = '', Attribute_Name1 ) {
   
    let tag=document.createElement(TagName);

    if (TagName=='input'||TagName=='img'||TagName=='video'||TagName=='audio'||TagName=='iframe') {
       tag.setAttribute(Attribute_or_Content, Attribute_Name1);
    } else {
       tag.innerHTML= Attribute_or_Content;
    }  

    tag.setAttribute(Attribute, AttributeName);
    container.appendChild(tag);
    return tag;
}
