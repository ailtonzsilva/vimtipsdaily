var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ 
                    /* Tips from Practical VIm Part I. Modes */
                    "Practice {command}s with the aw motion. (i.e. daw to delete the word under your cursor)",
                    "From Insert mode, we can switch to Normal mode for one operation by pressing < C-o >",
                    "Use <c-a> to increment the next number.  {number}<c-a> adds {number} to the next number.",
                    "Use <c-x> to decrement the next number.  {number}<c-x> subtracts {number} from the next number.",
                    "Use 'o' to toggle to other end of highlighted text. Useful to adjust the starting point of your visual selection",
                    "Use < C-r > < C-w > to copy the word under the cursor and insert it at the command-line prompt.",
                    "Press q: to access command-line window. You can edit your command history like any other text!",
                    "Use < C-f > to switch from Command-Line mode to the command-line window.",
                    "Use :write !{ cmd} to use the contents of the buffer as standard input for the specified {cmd}",
                    "Use the :source command to execute the batch.vim script",
                    "Use the argdo: command on a visual selection to perform the same operation across multiple lines",
                    "Use '{range}: normal {stuff}' to edit multiple lines in a selection",
                    "Use :ls command to list buffers in memory",
                    /* Tips from Practical VIm Part II. Files */
                    "In directory view (netrw), create a new file with '%'",
                    "In directory view (netrw), create a new directory with 'd'",
                    "Use ':write !{cmd}' to pipe buffer as input into the specified command",
                    "Use %:h to get the path part of the current file.  i.e., cd %:h to set the working directory to the directory of the current file.",
                    /* Tips from Practical VIm Part III. Getting Around Faster */
                    "Use 'e' to move to the end of the next word, and 'ge' to the end of the previous word",
                    "Use a /search as the motion for some other command, like delete (d/search<C-R>)",
                    "Use `` to jump to snap back to where you were before your last jump (or '' to jump to the last line)",
                    "Use ( and ) to jump to the beginning and end of sentences.",
                    "Use gf to jump to the file name under the cursor. https://vimhelp.appspot.com/editing.txt.html#gf",
                    "Use :changes to see the change list.  Use g; and g, to jump to the locations of the changes.",
                    "Use m{capital letter} to make a global mark. Close and reopen VIm, and press '{capital letter} to open the file w/ the global mark.",
                    "Use the \"0p to put from the yank register.  Useful when you have to edit with deletions, changes, etc after yanking.",
                    /* Tips from Practical VIm Part IV. Registers */
                    "Delete using the \"_d{motion} command to delete without saving a copy, preserving your default register.",
                    "Use the \"+ register to interact with the system clipboard. I.e., \"+p to put system clipboard into your current buffer.",
                    "Put from the \"% register to put the name of the current file.",
                    "Put from the \"# register to put the name of the alternate file (the most recent other file edited in the current buffer).",
                    "Put from the \": register to put the most recently executed EX command.",
                    "Put from the \"/ register to put the last search pattern used.",
                    "In insert mode, put the contents of the default register with <c-r>\".",
                    "Use gP and gp to put before or after the current line, and keep the cursor on the previous line.",
                    "Use :reg to view the contents of all registers, or :reg{register} to view the contents of one.",
                    "Use 10@a to play the macro saved in register a 10 times.",
                    "Use :normal @a to play the macro saved in register a on every line in the selection.",
                    "Use qA to append keystrokes to the macro in register a.",
                    "Use :edit! to revert all changes to the first buffer in the argument list",
                    "Use :wall to save changes to all files in the buffer list.",
                    "Use 'var += 1' in a macro to make a numbered list.  let i = 1<CR> qa I<C-r>=i<CR>) <Esc>:let i += 1<CR> j q", // Tip 71
                    "Edit a macro by putting it's register into your buffer, editing, then yanking it back to its regsiter. \"ap, [edit], \"add.",
                    /* Tips from Practical VIm Part V. Patterns */
                    "Use \\_s to search for whitespace or a linebreak. Compare to searching for \\s to see the difference.",
                    "Use \\zs and \\ze to delimit the visible or selected part of a match.",
                    /*TODO: "Use the escape({string}, {chars}) function to escape characters - tip 79",*/
                    "In character-wise visual selection mode, use gn to extend your selection to the next occurrance of the most recent search pattern.",
                    "Use ea to append to the end of the current word.",
                    "Append '/e' to the end of a search to place the cursor at the end of the next match.  I.e. /search phrase/e",
                    /*TODO: "use gUgn to capitalize the next search match.",*/
                    "To wrap text in, say, parens, use c{motion}(<C-r>\"). Change copies to default buffer, and in Insert mode, <C-r>\" pastes from the default buffer.",
                    "Use :%s///gn to count the matches of your most recent search.",
                    "Use :vimgrep /{search phrase}/g % to populate the quickfix list with each match in the current buffer, which can be navigated with N, n, :cnext or :cprev.",
                    ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray);
Bot.post('statuses/update', { status: phrase }, function(err, data, response) {
    console.log(data);
});
