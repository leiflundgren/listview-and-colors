const readline = require('readline-sync');


let words: string[] = [
"Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Donec", "non", "pretium", "eros.", "Proin", "imperdiet", "nibh", "a", "sollicitudin", "imperdiet.", "Fusce", "feugiat", "id", "magna", "sed", "rutrum.", "Vestibulum", "iaculis", "efficitur", "lacus,", "at", "molestie", "nulla", "scelerisque", "sit", "amet.", "Aliquam", "tortor", "quam,", "sagittis", "sit", "amet", "diam", "nec,", "porta", "pretium", "neque.", "Duis", "blandit", "est", "eget", "porta", "consectetur.", "Vivamus", "eleifend", "ante", "nec", "leo", "sodales,", "eu", "congue", "nunc", "venenatis.", "Ut", "sit", "amet", "dolor", "varius", "elit", "viverra", "egestas", "a", "non", "tortor.", "In", "sodales", "elit", "sed", "pellentesque", "sodales.", "Aenean", "elementum", "laoreet", "nibh", "at", "consequat.",
"Aenean", "a", "efficitur", "lectus.", "Sed", "pharetra", "semper", "venenatis.", "Vivamus", "eget", "feugiat", "ex.", "Morbi", "pretium", "placerat", "dictum.", "Ut", "scelerisque", "vestibulum", "dui", "in", "tempor.", "Pellentesque", "semper,", "est", "nec", "pellentesque", "luctus,", "lectus", "magna", "iaculis", "mi,", "sit", "amet", "scelerisque", "ipsum", "libero", "eu", "arcu.", "Donec", "tincidunt", "at", "lacus", "vitae", "molestie.", "Nullam", "dictum", "sollicitudin", "semper.", "Vestibulum", "tristique", "quam", "ut", "magna", "porta", "rhoncus", "eget", "eu", "est.", "Nulla", "facilisi.",
"Etiam", "at", "libero", "sit", "amet", "urna", "pulvinar", "pharetra.", "Sed", "at", "eleifend", "libero,", "accumsan", "sollicitudin", "velit.", "Sed", "non", "lobortis", "diam.", "Aliquam", "a", "tempus", "lectus,", "a", "luctus", "odio.", "Proin", "tristique", "interdum", "ipsum", "a", "pharetra.", "Phasellus", "pulvinar", "porttitor", "egestas.", "Pellentesque", "id", "risus", "vel", "lectus", "faucibus", "sodales.", "Mauris", "vel", "lectus", "ac", "enim", "pellentesque", "iaculis", "id", "a", "velit.", "Sed", "convallis", "volutpat", "tincidunt.", "Curabitur", "molestie", "euismod", "mattis.", "Curabitur", "pulvinar", "auctor", "finibus.", "Duis", "et", "tempor", "erat.", "Maecenas", "aliquet", "placerat", "felis", "ac", "facilisis.", "Vestibulum", "imperdiet", "blandit", "sapien,", "vel", "molestie", "massa", "hendrerit", "eleifend.", "Pellentesque", "aliquet", "arcu", "id", "odio", "tincidunt", "pellentesque.",
"Curabitur", "posuere,", "turpis", "id", "feugiat", "fringilla,", "velit", "risus", "convallis", "risus,", "a", "faucibus", "dolor", "purus", "vel", "dolor.", "Nam", "posuere", "mollis", "enim,", "venenatis", "molestie", "tellus", "ullamcorper", "convallis.", "Pellentesque", "lacinia", "fermentum", "est,", "sed", "accumsan", "odio", "suscipit", "et.", "Fusce", "non", "risus", "nec", "mauris", "finibus", "euismod", "sit", "amet", "interdum", "massa.", "Nullam", "a", "lacinia", "quam.", "Nam", "euismod", "arcu", "et", "nunc", "pharetra,", "vitae", "hendrerit", "risus", "ultricies.", "Nunc", "tempor", "suscipit", "lorem,", "eget", "blandit", "libero", "imperdiet", "ac.",
"Praesent", "a", "ex", "ligula.", "Aliquam", "fringilla", "sodales", "velit", "ut", "consectetur.", "Duis", "tincidunt", "porta", "libero,", "eget", "viverra", "libero", "tempor", "vitae.", "Pellentesque", "viverra", "lacinia", "libero.", "Mauris", "fermentum", "tellus", "est,", "pretium", "dignissim", "turpis", "pretium", "in.", "Etiam", "erat", "odio,", "rutrum", "ut", "ligula", "id,", "dictum", "bibendum", "orci.", "Etiam", "vestibulum", "aliquet", "quam", "ac", "rhoncus.", "Aliquam", "id", "malesuada", "enim,", "at", "scelerisque", "nibh.", "Cras", "vel", "finibus", "tellus,", "et", "commodo", "dui.", "Duis", "congue,", "sem", "quis", "suscipit", "posuere,", "ex", "ante", "condimentum", "ipsum,", "non", "fringilla", "urna", "sapien", "id", "tortor.", "Mauris", "euismod", "maximus", "diam,", "ut", "vehicula", "sem", "sagittis", "ut.", "Fusce", "mattis", "augue", "et", "maximus", "ornare.", "Orci", "varius", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus.", "Nunc", "sodales", "lorem", "nec", "finibus", "elementum.", "Quisque", "nec", "ultricies", "tellus.",
"Duis", "ultrices", "orci", "eget", "nulla", "aliquet,", "non", "porttitor", "est", "sagittis.", "Nullam", "tristique", "fermentum", "erat,", "at", "blandit", "urna", "ultrices", "vitae.", "Nunc", "eleifend", "lacus", "ante.", "Duis", "malesuada", "lacus", "in", "bibendum", "ultricies.", "Morbi", "lectus", "neque,", "dictum", "sed", "dictum", "sed,", "sollicitudin", "non", "elit.", "Aliquam", "eleifend", "dui", "eget", "nulla", "efficitur,", "eget", "convallis", "nulla", "aliquam.", "Nullam", "et", "interdum", "quam,", "vel", "mattis", "orci.", "Suspendisse", "potenti.", "Fusce", "quis", "ante", "a", "ipsum", "consectetur", "laoreet.", "In", "quis", "convallis", "dui.", "Nunc", "justo", "ipsum,", "suscipit", "non", "bibendum", "vestibulum,", "egestas", "sit", "amet", "nisi.", "Nam.",
];



let w: number = 0;

for (let itm: number = 1; itm <= 21; ++itm) {
    process.stdout.write(`System.Windows.Forms.ListViewItem listViewItem${itm} = new System.Windows.Forms.ListViewItem(new string[] { \n`);
    for (let col: number = 1; col <= 9; ++col) {

        if (col > 1)
            process.stdout.write(",");
        process.stdout.write("\"");
        for (let len: number = 0; len + words[w].length < 17; ++w) {
            process.stdout.write(`${words[w]} `);   
            len += words[w].length;
        }
        process.stdout.write("\"");
    }
    process.stdout.write("\n } );\n");
}

//console.log('Hello world');
//console.log(words);




readline.question("Time to die! ");
