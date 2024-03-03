const yers = prompt("Сколько вам лет?");
const city = prompt("В каком городе вы живете?");
const sport = prompt("Какой у вас любимый вид спорта?");
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

if(!yers){
    alert("Вы не захотели вести возраст!");
} else if (!city){
    alert("Вы не захотели вести город!");
} else if (!sport){
    alert("Вы не захотели вести cпорт!");
}else{
    alert(`
    Тебе ${yers}
    ${land}
    ${sport1}
    `);
};









