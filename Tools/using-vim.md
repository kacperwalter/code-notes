 ** To move the cursor, press the h,j,k,l keys as indicated. **
             ^
             k              Hint:  The h key is at the left and moves left.
       < h       l >               The l key is at the right and moves right.
             j                     The j key looks like a down arrow.
             v


 Lesson 1.3: TEXT EDITING - DELETION


           ** Press  x  to delete the character under the cursor. **

  1. Move the cursor to the line below marked --->.

  2. To fix the errors, move the cursor until it is on top of the
     character to be deleted.

  3. Press the  x  key to delete the unwanted character.

  4. Repeat steps 2 through 4 until the sentence is correct.

---> The ccow jumpedd ovverr thhe mooon.

  5. Now that the line is correct, go on to lesson 1.4.

NOTE: As you go through this tutor, do not try to memorize, learn by usage.



 Lesson 1.5: TEXT EDITING - APPENDING


                        ** Press  A  to append text. **

  1. Move the cursor to the first line below marked --->.
     It does not matter on what character the cursor is in that line.

  2. Press  A  and type in the necessary additions.

  3. As the text has been appended press <ESC> to return to Normal mode.

  4. Move the cursor to the second line marked ---> and repeat
     steps 2 and 3 to correct this sentence.

---> There is some text missing from this line.
     There is some text missing from this line.
---> There is alAso some text missing
     There is also some text missing here.

  5. When you are comfortable appending text move to lesson 1.6.




  Lesson 2.1: DELETION COMMANDS


                       ** Type  dw  to delete a word. **

  1. Press  <ESC>  to make sure you are in Normal mode.

  2. Move the cursor to the line below marked --->.

  3. Move the cursor to the beginning of a word that needs to be deleted.

  4. Type   dw   to make the word disappear.

  NOTE: The letter  d  will appear on the last line of the screen as you type
        it.  Vim is waiting for you to type  w .  If you see another character
        than  d  you typed something wrong; press  <ESC>  and start over.

---> There are a somewthat .


  Lesson 2.2: MORE DELETION COMMANDS


           ** Type  d$  to delete to the end of the line. **

  1. Press  <ESC>  to make sure you are in Normal mode.

  2. Move the cursor to the line below marked --->.

  3. Move the cursor to the end of the correct line (AFTER the first . ).

  4. Type    d$    to delete to the end of the line.




Lesson 2.4: USING A COUNT FOR A MOTION


   ** Typing a number before a motion repeats it that many times. **

  1. Move the cursor to the start of the line below marked --->.

  2. Type  2w  to move the cursor two words forward.

  3. Type  3e  to move the cursor to the end of the third word forward.

  4. Type  0  (zero) to move to the start of the line.




 Lesson 2.5: USING A COUNT TO DELETE MORE


   ** Typing a number with an operator repeats it that many times. **

  In the combination of the delete operator and a motion mentioned above you
  insert a count before the motion to delete more:
         d   number   motion

  1. Move the cursor to the first UPPER CASE word in the line marked --->.

  2. Type  d2w  to delete the two UPPER CASE words.

  3. Repeat steps 1 and 2 with a different count to delete the consecutive
     UPPER CASE words with one command.

--->  this line cleaned up.



Lesson 2.6: OPERATING ON LINES


                   ** Type  dd   to delete a whole line. **

  Due to the frequency of whole line deletion, the designers of Vi decided
  it would be easier to simply type two d's to delete a line.

  1. Move the cursor to the second line in the phrase below.
  2. Type  dd  to delete the line.
  3. Now move to the fourth line.
  4. Type   2dd   to delete two lines.


 Lesson 2.7: THE UNDO COMMAND


   ** Press  u  to undo the last commands,   U  to fix a whole line. **

  1. Move the cursor to the line below marked ---> and place it on the
     first error.
  2. Type  x  to delete the first unwanted character.
  3. Now type  u  to undo the last command executed.
  4. This time fix all the errors on the line using the  x  command.
  5. Now type a capital  U  to return the line to its original state.
  6. Now type  u  a few times to undo the  U  and preceding commands.
  7. Now type CTRL-R (keeping CTRL key pressed while hitting R) a few times
     to redo the commands (undo the undo's).




    Lesson 2 SUMMARY


  1. To delete from the cursor up to the next word type:    dw
  2. To delete from the cursor to the end of a line type:    d$
  3. To delete a whole line type:    dd

  4. To repeat a motion prepend it with a number:   2w
  5. The format for a change command is:
               operator   [number]   motion
     where:
       operator - is what to do, such as  d  for delete
       [number] - is an optional count to repeat the motion
       motion   - moves over the text to operate on, such as  w (word),
                  $ (to the end of line), etc.

  6. To move to the start of the line use a zero:  0

  7. To undo previous actions, type:           u  (lowercase u)
     To undo all the changes on a line, type:  U  (capital U)
     To undo the undo's, type:                 CTRL-R


  Lesson 3.1: THE PUT COMMAND


       ** Type  p  to put previously deleted text after the cursor. **

  1. Move the cursor to the first line below marked --->.

  2. Type  dd  to delete the line and store it in a Vim register.

  3. Move the cursor to the c) line, ABOVE where the deleted line should go.

  4. Type   p   to put the line below the cursor.

  5. Repeat steps 2 through 4 to put all the lines in correct order.


Lesson 3.2: THE REPLACE COMMAND


       ** Type  rx  to replace the character at the cursor with  x . **

  1. Move the cursor to the first line below marked --->.

  2. Move the cursor so that it is on top of the first error.

  3. Type   r   and then the character which should be there.

  4. Repeat steps 2 and 3 until the first line is equal to the second one.

--->  When this lime was tuped in, someone pressed some wrong keys!
--->  When this line was typed in, someone pressed some wrong keys!




 Lesson 3.3: THE CHANGE OPERATOR


           ** To change until the end of a word, type  ce . **

  1. Move the cursor to the first line below marked --->.

  2. Place the cursor on the  u  in  lubw.

  3. Type  ce  and the correct word (in this case, type  ine ).

  4. Press <ESC> and move to the next character that needs to be changed.

  5. Repeat steps 3 and 4 until the first sentence is the same as the second.


** Move to end and start the line **

$ - endl
0 - startl



Lesson 3 SUMMARY


  1. To put back text that has just been deleted, type   p .  This puts the
     deleted text AFTER the cursor (if a line was deleted it will go on the
     line below the cursor).

  2. To replace the character under the cursor, type   r   and then the
     character you want to have there.

  3. The change operator allows you to change from the cursor to where the
     motion takes you.  eg. Type  ce  to change from the cursor to the end of
     the word,  c$  to change to the end of a line.

  4. The format for change is:

         c   [number]   motion

Now go on to the next lesson.



Lesson 4.1: CURSOR LOCATION AND FILE STATUS

  ** Type CTRL-G to show your location in the file and the file status.
     Type  G  to move to a line in the file. **

  NOTE: Read this entire lesson before executing any of the steps!!

  1. Hold down the Ctrl key and press  g .  We call this CTRL-G.
     A message will appear at the bottom of the page with the filename and the
     position in the file.  Remember the line number for Step 3.

NOTE:  You may see the cursor position in the lower right corner of the screen
       This happens when the 'ruler' option is set (see  :help 'ruler'  )

  2. Press  G  to move you to the bottom of the file.
     Type  gg  to move you to the start of the file.

  3. Type the number of the line you were on and then  G .  This will
     return you to the line you were on when you first pressed CTRL-G.



     Lesson 4.2: THE SEARCH COMMAND


     ** Type  /  followed by a phrase to search for the phrase. **

  1. In Normal mode type the  /  character.  Notice that it and the cursor
     appear at the bottom of the screen as with the  :  command.

  2. Now type 'errroor' <ENTER>.  This is the word you want to search for.

  3. To search for the same phrase again, simply type  n .
     To search for the same phrase in the opposite direction, type  N .

  4. To search for a phrase in the backward direction, use  ?  instead of  / .

  5. To go back to where you came from press  CTRL-O  (Keep Ctrl down while
     pressing the letter o).  Repeat to go back further.  CTRL-I goes forward.


 Lesson 4.3: MATCHING PARENTHESES SEARCH


              ** Type  %  to find a matching ),], or } . **

  1. Place the cursor on any (, [, or { in the line below marked --->.

  2. Now type the  %  character.

  3. The cursor will move to the matching parenthesis or bracket.

  4. Type  %  to move the cursor to the other matching bracket.

  5. Move the cursor to another (,),[,],{ or } and see what  %  does.

---> This ( is a test line with ('s, ['s ] and {'s } in it. ))


 Lesson 4 SUMMARY


  1. CTRL-G  displays your location in the file and the file status.
             G  moves to the end of the file.
     number  G  moves to that line number.
            gg  moves to the first line.

  2. Typing Typing    /  followed by a phrase searches FORWARD for the phrase.
     Typing  ?  followed by a phrase searches BACKWARD for the phrase.
     After a search type  n  to find the next occurrence in the same direction
     or  N  to search in the opposite direction.
     CTRL-O takes you back to older positions, CTRL-I to newer positions.

  3. Typing  %  while the cursor is on a (,),[,],{, or } goes to its match.

  4. To substitute new for the first old in a line type    :s/old/new
     To substitute new for all 'old's on a line type       :s/old/new/g
     To substitute phrases between two line #'s type       :#,#s/old/new/g
     To substitute all occurrences in the file type        :%s/old/new/g
     To ask for confirmation each time add 'c'             :%s/old/new/gc



Lesson 6.2: THE APPEND COMMAND - !!! important thing


            ** Type  a  to insert text AFTER the cursor. **



 Lesson 6.3: ANOTHER WAY TO REPLACE


      ** Type a capital  R  to replace more than one character. **

  1. Move the cursor to the first line below marked --->.  Move the cursor to
     the beginning of the first  xxx .

  2. Now press  R  and type the number below it in the second line, so that it
     replaces the xxx .

  3. Press <ESC> to leave Replace mode.  Notice that the rest of the line
     remains unmodified.

  4. Repeat the steps to replace the remaining xxx.

---> Adding 123 to xxx gives you 579.
---> Adding 123 to 456 gives you 579.


esson 6.4: COPY AND PASTE TEXT


          ** Use the  y  operator to copy text and  p  to paste it **

  1. Move to the line below marked ---> and place the cursor after "a)".

  2. Start Visual mode with  v  and move the cursor to just before "first".

  3. Type  y  to yank (copy) the highlighted text.

  4. Move the cursor to the end of the next line:  j$

  5. Type  p  to put (paste) the text.  Then type:  a second <ESC> .



 1. Type  o  to open a line BELOW the cursor and start Insert mode.
     Type  O  to open a line ABOVE the cursor.

  2. Type  a  to insert text AFTER the cursor.
     Type  A  to insert text after the end of the line.

  3. The  e  command moves to the end of a word.

  4. The  y  operator yanks (copies) text,  p  puts (pastes) it.

  5. Typing a capital  R  enters Replace mode until  <ESC>  is pressed.

  6. Typing ":set xxx" sets the option "xxx".  Some options are:
        'ic' 'ignorecase'       ignore upper/lower case when searching
        'is' 'incsearch'        show partial matches for a search phrase
        'hls' 'hlsearch'        highlight all matching phrases
     You can either use the long or the short option name.











