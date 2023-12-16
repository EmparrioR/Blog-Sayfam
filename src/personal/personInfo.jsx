// personInfo.js dosyası
export const getPersonInfo = () => {
    return {
      name: "Mahmut Alperen Atar",
      city: "Konya/Selçuklu",
      email: "alperen.atar.2001@gmail.com",
      linkedin: "linkedin.com/in/mahmut-alperen-atar-139202223",
      // Diğer bilgileri ekle
    };
  };

  const becerilerim = [
    "HTML5","CSS3","JS","Linux","Java"
  ]

export function BecerilerileriListele() {

    return (
        <>
        <h2> Becerilerim </h2>
        <ul>
            {becerilerim.map((beceri,index)=><li key={index}>{beceri}</li>)}

        </ul>
        </>
    )

    
}

const hobilerim = [
    "Doğa Sporları","Yazılım","Edebiyat","Sinema"
  ]

export function HobileriListele() {

    return (
        <>
        <h2> Hobilerim </h2>
        <ul>
            {hobilerim.map((hobi,index)=><li key={index}>{hobi}</li>)}

        </ul>
        </>
    )


}