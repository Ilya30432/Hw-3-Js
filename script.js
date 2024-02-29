const yers = prompt("Сколько вам лет?");
if(yers === null){
    alert("Вы не захотели вести возраст!");
} else{
    const city = prompt("В каком городе вы живете?");
    if(city === null){
        alert("Вы не захотели вести город!");
    } else{
        const sport = prompt("Какой у вас любимый вид спорта?");
        if(sport === null){
            alert("Вы не захотели вести cвой любимый вид спорта!");
        } else{
            let land ;
                switch(city){
                case "Киев":
                land = "Ты живешь в cтолицы Украины";
                break;
                case "Вашингтон":
                land =  "Ты живешь в столицы США";
                break;
                case "Лондон":
                land =  "Ты живешь в cтолицы Великобританий";
                break;
                default:
                land = `Ты живешь в городе ${city}`;
            };
            let sport1;
            switch(sport){
                case "Бокс":
                sport1 = "Круто! Ты хочешь стать Майком Тайсаном?";
                break;
                case "Баскетбол":
                sport1 =  "Круто! Ты хочешь стать Майклом Джорданам?";
                break;
                case "Футбол":
                sport1 =  "Круто! Ты хочешь стать Лео Месси?";
                break;
                default:
                sport1 = `Твой любимый вид спорта  ${sport}`;
            };
alert(`Тебе ${yers} лет
    ${land}
    ${sport1}
    `);
        };
    };
};









