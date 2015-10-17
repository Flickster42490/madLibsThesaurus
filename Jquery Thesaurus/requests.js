
        var $userWord, $userWord2, synonym, posArray, posChosen, word1,word2;
        var string = 'Last week, our class went on the'+word1+'field trip ever to the petting zoo. This petting zoo had all kinds of __nouns(plural)__-from___noun__ to ___noun__ and everything in between. For twenty-five cents, you could buy a handful of ___noun____ to feed them. They would __verb__ every time they wanted a treat. The ___noun____ kept trying to bite my clothes. I think its because I smell like ____adj___. Some ___noun___ ran up to my teacher, who got really scared and started to ___verb___. I laughed so hard that I began to __verb___. That sure was the __adj___ petting zoo Ive ever been to.';
        $('.useThesaurus').on('click', function(){
          $userWord= $('#inputField').val();
          $userWord2= $('#inputField2').val();


          var ajax1 = function() {
            $.ajax({
              type:"GET",
              url: "http://words.bighugelabs.com/api/2/cf731533bebea34239bf31114f2d056b/"+$userWord+"/json",
              datatype: "json",
              complete: function(resp1){
                if(resp1.status === 404){
                  alert('Yo homie, use a REAL word in 1');
                  $userWord = $('#inputField1').val('');
                }
                else{
                synonyms = JSON.parse(resp1.responseText);
                posArray = Object.keys(synonyms);
                posChosen = posArray[Math.floor(Math.random() * posArray.length)];
                console.log(synonyms[posChosen].syn)
                word1 = synonyms[posChosen].syn[Math.floor(Math.random() * synonyms[posChosen].syn.length)];
                $('.result1').html(synonyms[posChosen].syn[Math.floor(Math.random() * synonyms[posChosen].syn.length)]);
              };
              }
            });
          }


          var ajax2 = function(){$.ajax({
              type:"GET",
              url: "http://words.bighugelabs.com/api/2/cf731533bebea34239bf31114f2d056b/"+$userWord2+"/json",
              datatype: "json",
              complete: function(resp2){
                if(resp2.status === 404){
                  alert('Yo homie, use a REAL word in 2');
                  $userWord2 = $('#inputField2').val('');
                }
                else{
                synonyms = JSON.parse(resp2.responseText);
                posArray = Object.keys(synonyms);
                posChosen = posArray[Math.floor(Math.random() * posArray.length)];
                console.log(synonyms[posChosen].syn)
                word2 = synonyms[posChosen].syn[Math.floor(Math.random() * synonyms[posChosen].syn.length)];
                $('.result2').html(synonyms[posChosen].syn[Math.floor(Math.random() * synonyms[posChosen].syn.length)]);
                }
              }
            });
        }

  });
