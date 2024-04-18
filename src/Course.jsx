import React from 'react'

// export const Course = () => {
//   return (
//     <div>Course</div>
//   )
// }

//function Course(props) {
function Course({ image, title, description} ) {
    // console.log(props)
    // const title = props.title;
    // const description = props.description;

    // Yukarıdakine göre bu daha projesyonelce bir yaklaşım
    //const { title, description } = props; // Burada dedik ki misal title diye bir değişken oluştur, bunu da props'içindeki title'a ata

    //Yukarıdakini daha da geliştitirsek Course(props) yerine Course({ title, description }) yazabiliriz

    return (
      <>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={image}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
           
              <div className="media-content">
                <p className="title is-4">{title}</p>
              </div>
            </div>

            <div className="content">
              {description}
            </div>
          </div>
      </>
    );
}

export default Course;