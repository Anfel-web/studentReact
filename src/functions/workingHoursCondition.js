function workingHoursCondition(hours, isMax, isMin) {
    if (isMax) return "tu peut ajouter 6maximum"
    if (isMin) return "tu peut supprimer maximum 0"
    if (hours === 0) {
        return "il faut cliquer sur button ajouter une heure";

    } else if
        (hours <= 0 || hours <= 6) {
        return `il reste ${6 - hours} h du travail`
    }
}
export default workingHoursCondition;