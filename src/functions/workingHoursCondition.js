function workingHoursCondition(hours) {
    if (hours === 0) {
        return ("il faut cliquer sur button ajouter une heure");

    } else if
        (hours <= 0 && hours >= 6) {
        return ("il reste {6 -hours} h du travail");
    } else if
        (hours > 6)
        return ("tu peut ajouter 6maximum")
    else
        return ("tu peut supprimer maximum 0");
}
export default workingHoursCondition;