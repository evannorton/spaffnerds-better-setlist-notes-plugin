setInterval(() => {
    if (document.getElementById("root").innerHTML === "") {
        location.reload();
    }
    const notesRow = document.querySelector(".Notes");
    if (notesRow !== null) {
        const noteCols = notesRow.children;
        const sups = document.querySelectorAll(".song-flag");
        if (noteCols.length === sups.length) {
            const notes = [];
            let matched = 0;
            for (let i = 0; i < noteCols.length; i++) {
                const noteCol = noteCols[i];
                const sup = sups[i + matched];
                const note = noteCol.children[0].innerHTML;
                if (notes.includes(note) === true) {
                    console.log(noteCol);
                    console.log(noteCol.parentElement);
                    console.log("\n");
                    noteCol.parentElement.removeChild(noteCol);
                    sup.innerHTML = ` [ ${notes.indexOf(note) + 1} ]`;
                    matched++;
                    i--;
                }
                else {
                    const noteColHTML = noteCol.innerHTML;
                    const num = Number(noteColHTML.substring(2, noteColHTML.indexOf(" ]")));
                    noteCol.innerHTML = noteColHTML.replace(`[ ${num} ]`, `[ ${num - matched} ]`);
                    sup.innerHTML = ` [ ${num - matched} ]`;
                }
                notes.push(note);
            }
        }
    }
}, 100);