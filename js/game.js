points = 0;
nbr_rolls = 50;
victoire = 0;

$(".r_left").html(nbr_rolls);

resultat = [];

gagner_421 = [4, 2, 1];
gagner_111 = [1, 1, 1];
gagner_611 = [6, 1, 1];
gagner_666 = [6, 6, 6];
gagner_555 = [5, 5, 5];
gagner_411 = [4, 1, 1];

function generate() {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min)) + min;
}

function lancer() {
    if (nbr_rolls == 0) {
        alert("Partie sauvegardé!" + " " + points + " points ");
        $(".points-input").val(points);
        $('form#form_points').submit();
        window.location.reload();
        /* window.location.href = "save_game.php"; */
    } else {
        nbr_rolls--;
        $(".r_left").html(nbr_rolls);
        let hh = generate();
        let oo = generate();
        let pp = generate();

        resultat = [hh, oo, pp];

        console.log(nbr_rolls);
        console.log(resultat);

        switch (hh) {
            case 1:
                $("._3dbox").css("transform", "translate3d(0, 0, 125px)");
                break;
            case 2:
                $("._3dbox").css("transform", "rotateY(90deg)");
                break;
            case 3:
                $("._3dbox").css("transform", "rotateY(-90deg)");
                break;
            case 4:
                $("._3dbox").css("transform", "rotateX(-90deg)");
                break;
            case 5:
                $("._3dbox").css("transform", "rotateX(90deg)");
                break;
            case 6:
                $("._3dbox").css("transform", "rotateY(180deg)");
                break;
        }

        switch (oo) {
            case 1:
                $("._3dbox-1").css("transform", "translate3d(0, 0, 125px)");
                break;
            case 2:
                $("._3dbox-1").css("transform", "rotateY(90deg)");
                break;
            case 3:
                $("._3dbox-1").css("transform", "rotateY(-90deg)");
                break;
            case 4:
                $("._3dbox-1").css("transform", "rotateX(-90deg)");
                break;
            case 5:
                $("._3dbox-1").css("transform", "rotateX(90deg)");
                break;
            case 6:
                $("._3dbox-1").css("transform", "rotateY(180deg)");
                break;
        }

        switch (pp) {
            case 1:
                $("._3dbox-2").css("transform", "translate3d(0, 0, 125px)");
                break;
            case 2:
                $("._3dbox-2").css("transform", "rotateY(90deg)");
                break;
            case 3:
                $("._3dbox-2").css("transform", "rotateY(-90deg)");
                break;
            case 4:
                $("._3dbox-2").css("transform", "rotateX(-90deg)");
                break;
            case 5:
                $("._3dbox-2").css("transform", "rotateX(90deg)");
                break;
            case 6:
                $("._3dbox-2").css("transform", "rotateY(180deg)");
                break;
        }

        if (JSON.stringify(resultat) == JSON.stringify(gagner_421)) {
            points += 10;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (JSON.stringify(resultat) == JSON.stringify(gagner_111)) {
            points += 7;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (JSON.stringify(resultat) == JSON.stringify(gagner_611)) {
            points += 6;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (JSON.stringify(resultat) == JSON.stringify(gagner_666)) {
            points += 6;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (JSON.stringify(resultat) == JSON.stringify(gagner_555)) {
            points += 5;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (JSON.stringify(resultat) == JSON.stringify(gagner_411)) {
            points += 4;
            $(".points").html(points + " points");
            resultat = [];
            alert("Gagner");
        } else if (resultat.length == 3) {
            resultat = [];
        }

    }

}

$(".points").html(points + " points");