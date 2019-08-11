// adapted from https://stackoverflow.com/a/48078807/1217368
$(document).ready(function() {
    $('pre.highlight').each(function(i) {
       if (!$(this).parent().hasClass('no-select-button')) {
 
         // create an id for the current code section
         var currentId = "codeblock" + (i + 1);
 
         // find the code section and add the id to it
         var codeSection = $(this).find('code');
         codeSection.attr('id', currentId);
         //codeSection.setAttribute('class', 'snippet')
 
         // now create the button, setting the clipboard target to the id
         var btn = document.createElement('a');
         btn.setAttribute('type', 'btn');
         btn.setAttribute('class', 'btn-copy-code snippet');
         btn.setAttribute('data-clipboard-target', '#' + currentId);
         btn.innerHTML = '<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src="../images/clippy.svg" alt="Copy to clipboard"></button>';
         this.insertBefore(btn, this.firstChild);
       }
     });
 
     new ClipboardJS('.btn-copy-code');
   });

   