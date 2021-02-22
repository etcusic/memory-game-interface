export function userName (session) {
    return `
    <div class="panel row three-percent"> 
        <div id="muppet-name" class="center-align three-percent" value=${session.id}>${session.name}</div>
    </div> `
}