export function highScoreLi (index, gameLog) {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${gameLog.user}</td>
        <td>${gameLog.deck}</td>
        <td>${gameLog.score}</td>
    </tr>
    `
}