function counter()
{
    var counter = document.querySelector(".advantages-ouptput__counter");

    var date_actuelle = new Date();
    var date_evenement = new Date("Apr 11 00:00:00 2019");
    var total_secondes = (date_evenement - date_actuelle) / 1000;


    if (total_secondes > 0)
    {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));



        if (jours < 10)
        {
            jours = '0' + jours;
        } else if (jours == 0)
        {
            jours = '00';
        }
        

        if (heures < 10)
        {
            heures = '0' + heures;
        } else if (heures == 0)
        {
            heures = '00';
        }

         if (minutes < 10)
        {
            minutes = '0' + minutes;
        } else if (minutes == 0)
        {
            minutes = '00';
        }

          if (secondes < 10)
        {
            secondes = '0' + secondes;
        } else if (secondes == 0)
        {
            secondes = '00';
        }

        counter.innerHTML =   '<p>' + jours + '</p><p> : </p><p>'+ heures + '</p><p> : </p><p>' + minutes + '</p><p> : </p><p>' + secondes + '</p>';
    }
    else
    {
        counter.innerHTML = 'Peatlh est sortie !';
    }

    var actualisation = setTimeout("counter();", 1000);
}
counter();