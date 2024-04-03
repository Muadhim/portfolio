<template>
  <div class="w-full h-[600px] view-3D">
    <div id="title" class="">My Skills</div>
    <div id="universe" class="scale-stretched">
      <ul id="solar-system" class="earth">
        <li v-for="(tech, index) in skills" :key="index">
          <SkillItem :title="tech.title" :desc="tech.desc" />
        </li>
      </ul>
      <!-- <div id="solar-system" class="earth">
        <div id="vue" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Mercury</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="js" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Venus</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="flutter" class="orbit">
          <div class="pos">
            <div class="orbit">
              <div class="pos">
                <div class="moon"></div>
              </div>
            </div>
            <div class="planet">
              <dl class="infos">
                <dt>Earth</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="react" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Mars</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="php" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Jupiter</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="ts" class="orbit">
          <div class="pos">
            <div class="planet">
              <div class="ring"></div>
              <dl class="infos">
                <dt>Saturn</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="tailwindcss" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Uranus</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="neptune" class="orbit">
          <div class="pos">
            <div class="planet">
              <dl class="infos">
                <dt>Neptune</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="skill">
          <dl class="infos">
            <dt>Sun</dt>
            <dd><span></span></dd>
          </dl>
        </div>
      </div> -->
    </div>
    <div id="data">
      <a class="sun" title="sun" href="#sunspeed">Sun</a>
      <a class="mercury" title="mercury" href="#mercuryspeed">Mercury</a>
      <a class="venus" title="venus" href="#venusspeed">Venus</a>
      <a class="earth active" title="earth" href="#earthspeed">Earth</a>
      <a class="mars" title="mars" href="#marsspeed">Mars</a>
      <a class="jupiter" title="jupiter" href="#jupiterspeed">Jupiter</a>
      <a class="saturn" title="saturn" href="#saturnspeed">Saturn</a>
      <a class="uranus" title="uranus" href="#uranusspeed">Uranus</a>
      <a class="neptune" title="neptune" href="#neptunespeed">Neptune</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~/constants";
import { ref } from "vue";

// Define a reactive variable to hold the selected skill
const selectedSkill = ref("");

// Function to update the selected skill
const updateSkill = (skill: string) => {
  selectedSkill.value = skill;
};
</script>

<style lang="scss">
@import "~/assets/css/skills.scss";

@each $skill in $skills {
  #[`#{$skill}`] {
    background-image: url("~/assets/images/#{$skill}.svg"); // Assuming each skill SVG has a corresponding file named as the skill name
  }
}

#vue .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAABGdBTUEAALGPC/xhBQAAADBQTFRFqqWjubWzoZyZjoiFqqWiu7e1nZaToZyarqmnAAAAq6Wi2tXSurSxy8bCxL670czJ3zIDEAAAAAp0Uk5TclBQUOvj+xCAAOCI6hkAAACSSURBVAjXAYcAeP8AmZeEbeWHmZAAmTSq7M2kKZAAk2rN7O7M4ZAAdKzf7f/s/nAAjt2+u7/f/YAAXf/7u/3vzlAA6uv/u97d/aAAasv+/93+3GAAz+//3t3+ymAAWr3f/93+7lAAjOzrv73f3oAAdKzLv/3t5XAAk6rM/87qopAAmTbOzOzGKZAAmZeErsWHmZDnbFcFNI0NnwAAAABJRU5ErkJggg==);
}

#js .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFnHlVuYpjfWdJpX5aqoFcu4xkm3lWjnFQj3JQdmNFhGxMk3RSmXhUqoFcq4JdgGlKr4VelHVSim9OvIxkon1ZvIxkvIxkvIxkvIxkvIxkvIxkvIxkvIxkvIxkAAAAvIxkls4uvQAAACB0Uk5Tm/1srVqO0Ycro9cNHcDU6ezowbzpv8Lgx8zq5dLbAOwHjDEIAAAB2UlEQVQoz12TiZbqMAiG49Zq16TZIAF5/7e8pLXOzMVjPfEr8EPAvE+b7g9fBGO63afvn+aEjxg51ZovJLz0z7/4AQk5FmYWNfLz9RceE2LKQkBCIlkwpWDGE49JsBR1IqkgtfkLhNv4wamdSymZcgIPO5YlbAd+6AFzjoBECSKwZA0lwfUNP/eXiQCIqQoCE2gCssE9FT+OYFoPqru0H9Aima17vc10UInY3HPBijH6iAJLcJO5f3CJCUBDFwCtC6RUDNvd+BNLSlgoJaoAiUplO2+90XYcwXPOFRGlUkvSLGyb4fSRBj5mxlqYmGvV0mpwqzm63Iw5A9TMKaZWt2jw1cgvQypau5TjlGYNjuUHq3Qp55kuLbePtdlFsj5V74E1I83d8DI6BtH7jJK91zuve4PJs6Z2iu+FPO36kteaFTPo61mvzK1XM3HxdGTLgE0W7wnssq3rZN63E2thfOhCjWFV2KtdqG09azMkPn+agErdsLYLffdWSJVXbeW3RBu6Ybgew3Rb2NfK+ily9ER9t2E7R9HMMxChDqo06XbpNk08fgfZdMuiHBVbq65uXV/jrzXouy4swS52CTtc+79L9Ow351yn3wZf/y1R27LrNqxDY9efFfwHiRFWry5LGJMAAAAASUVORK5CYII=);
}

#flutter .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFGDRdAyFNIDxkQld5CCZTIztsJD1lAAAArsblO230dJfgP2vUnLbbbovAOF2vN1GERnb0Un/yW3asWH3PeY+uhKfyYXaVjafNT2WNeJ3zv9f0nrzzX4rzkLHzrcjzbZX0L9IPbAAAAAh0Uk5TfSC49Uv+4wC/XoCAAAACEUlEQVQoz12T2WKrMAxECWDC4n1fZOv//7IiaXp760cOtkaj0fT8nHXe1LLEmJd5/fk4feDGGFPeR0U/5G39H290zXohhJUi+czY9gs/lhytsM4JvvPEebJZsccH3zSldDrX6uhw8jMl/+Y33nKWibdQChhTsDRzXdbm5Y1nla1LYxAwGjsChvPmcb7xGrMVrtemQdPB0ltt6C6Z80p4y164CxpqMMcBZdRWey9O2rg9p5VlIS5ttMGCiGFUgn20xoXP6zQrJd2JAKW83q11tF5Cb9zZPE9btPIcI5AmLKXXEfoIASGchLeJ5eTCKNA7GMReu8HR26AGLqnUxFRyF3U7aqFrpQVjXrXBOJGXKUexl5fgPsgzqjpIV2sAztk4ZZ/2gVBqfb8NJH/QwcC5j1P0KTU0UOttKrUHh8Y2qL/9jcUZAsCrJTwOHYyG3so3XrJNJ7U1Xn4UfWiAW1nrPPllmqk4v1lrRQMarQ2QPKonBNmyLlScGg1Ik6C6QG8XbA3P5NlKI6EonGHoA2gY5BwZVqAAReIeyXNlyvJ9DJpWozcPU8hzJFNsvAf6pIySOooDUBA6tRBCP5OUav4OE1NSXHu9nQ+kn9LiklXbTxSJS7fvt1kAx+Wc9H57/Aty9FImms3Or+uSBOPy+LUGc/RkT6KgO0lVY57/LpHKlEnrvacV+LtE7xVkSuW8bL9W8AvOdz8ZXmQqKAAAAABJRU5ErkJggg==);
}

#flutter .moon {
  background-color: white;
}

#react .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAGBQTFRFsW89lWA2jVwzsm8+qGo72oVJrW08h1gxlWA15IpMrW09jlw0l2E2nGM3v3ZC3YdK3odKyHtE75BP8JFQ8JFQ8JFQ8JFQ8JFQw3hD8JFQ8JFQ8JFQ8JFQ8JFQ8JFQAAAAe3ooYQAAACB0Uk5Tk0+hrcTz6g7P5tkiYurz49bk79XR3vvm2PH26ezi2QCQ4vSgAAABm0lEQVQoz1VSWXaEMAzLLAw7ZHMSx0vvf8uaTtvX+icQYSRbch/vGrf7ftV0v43fV+59bNP+Oo6jtXAs0/YHWg1o4TxnqyG05bn+QOt0AUIRKWVV39qyvqF1f4VTFSqiZgWuerarz6D7KwyoqkI19k5UFYfjeUHbdJzEkLQS9cLCSELDsX24cVoCVYYMHXsphQk0Aw2v0W17OCv2CPwFIWnSBDAfmzOmSt0KmZhj1ZwERLU5N72GwsyIREwCKZtIsAe/uL3NpapW42ciMTWitXI8g9uDj/aCAEZoaqRHtf8ZmduPFAtW1kz2BWntXQRUo0FhTrVcKxLTZmNbi7Fd0NR8Vhsz5x6jZMHIrJrS3Nx98WAQ5lyJsXdGGxs0eeduS5Brs1+y2dZRe0EBajc3LuaHEKRks8qFIYrC0EZb79KM31qUbCO9l44mJWyXKY9mbMnkJzAeo0Ni/3hb+WynqDGkDJHNa/Okrd8BWJpPag1gHpdO5vL6G5tnC15rRBaI6sNj/Ru25Wjez3E+LTTbvxxaRB/PdtVj+4noJ91nOp3NTB6wAAAAAElFTkSuQmCC);
}

#php .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFqpWAqpaBq5aCqpaDq5V/AAAAr4plvq+czaeBwaCBxKWH18Wv1LeZt5uAq5J6xbCZy6F2wJNmx7ekza2Lxppuz7advamUyamK0LOUq5iFtqSQzb6rsZ6Lza+Q17+m1Lqh1ZNV/gAAAAZ0Uk5TJGTA4pAAM0Px7gAADLVJREFUaN6tmgljmzoQhPHRGGN8BBmDD5n//y/fzOwu4CRt0/apuZzUfOyh2ZVE8eObY7FerlZXGw98rpbLxXffW3wLsIzLC+FDpPX/AinWq4Pd/YMfj5HhnMNqXfwjZLE8cFxfLq1xGzmP6+8c90sIjIixx2VvN36+DEHwZbX+S8iE2B/2GI8JcZkoZiPMWf8FZMFYO8Mg+z2uzuFfBaPjzHPX1eIPIcXSXb4fCRjbyq4/DjcporMs/gSyvj7COX75/dZGdalw8eOEuV1G0E99VvzMDPO9rlMJMWKq6nLE+GiQmfOlMV/8boGEMYfznnW1rqoMoI+tUYx0vGwiRBaZ4juQxV526J1+qbY95o4AwISruvFvG/7bbMxpiszi95C1zYmR0XIMw9BmXL/Thyhdd5wGOLIGUxQ5uf4dZP2mmXcLRCPEE6PNXZdw7aoEpkRouhyM5ugQzc7P4S8+MjA4M25iNO3IeD6Huu+7nGhN6dZkQzRNM7pMHlv/CiIGKO97BVd+EmKHIU7dd2VZlRxb4HLOsLZpGzlNHvuCUnzBeHt7JwX32eK6ZsbuuXNz4DVQqtRt6bTUiXInJcJ/+0iZQxZv03g/k9Ibwu14yip4Leey7BJs2ZYdndYO90YuO7rcfMixGaSYCPx3Pm27XMtd4SyjmNNSLrtyWwKVcm6fQ0uKeUyQa/EVpHibQzDOZ1ygrsERZUdLhkFfanIQlDKlVCakA/ODENMBVYDZrCw+BSQIZ3yeyr7mcFtaucuyAZyOTtPI+G9D2xJzUWAkl58h67cP3gLkBAqM6UeMKK2xns8eKYCp45Shz5oxFpeX6VJMzjpMBI4TKRxwWd/3AyEW+YGUQbEBAlmcMinIh+M8k6ewxHer5UxeQ8BhJ36ey9OprBMpll/2zVN7kJU9EJleJdDjYpL8CoHyXlWf6KagaMiWsu8THOKhfzpHL5EXuAdcXzSoTmcQ2bJ4gayuqiCoTueJYph3JlmPz1TTQRYRhsYgzLe+rzON7RNFp5qUfzWHrNlYURSp5KScg6UXCH+fSqQa3J57ipnFhhCyakadlJwooV01lpf1DKK+0JUXcsG7R2adwxrlWEJwODphzHVteG+gDij2xOBW2T7RYRPEDLldpIkt7oe5i2icDYLo0xSlGvMgmTVMs3Z4EWmakrJKjvoYT2NBVg8rhqpRfBu06cSQu+PONAJT/MSfaJepGiD1rBRI1WBHzrRlq07tugrIQr3JxRk2nzNECV5TKtMWZlhKlmxyX1/LX3ZTXg6eMCZBV1Wl2eRcTSiL0RCHmHBQ0hPvnBCGhymGX5zsBTCdZO05eHVmTmO6Mp8tKFuagqm3Mkhx8NQyS567MTNxVRpz4mVpSCkEQCRTffMQwwsBVRSRYYYRQkohCFqH6z4MIWQXpaPOpSaKDEB+yRJGX9mg2NSuy8/nzin83gcElLUgq2gdPCQzysBia0rJqDC1TkZSpJRo9WiJF9CddR2VQ1aCWE8tf7Xxhqdn59D2ctL5/RQxOen1+XyKGdQrNs9Zpebb8+gvQtYG2bPHkWZYGI3HuPY0AQkgiqe2QoPfKTg5S9e8pnk6t8dLZZA1IMsJMlJCloankgfGS/hLSy9z1Um/cmvgtsEqdDQc6DqhLYQsAXGGQXIdd4LrD1EIldBpunqp9DrZPDUFRXTq0WFWdKj5kFwEZYKwO+lYR+uwxPTWmtS2Raox3ifFW5ngYqCpBEci1UKhmWKtKgtWOIcfxWJmSabIsi5YYnqdNa+xdCjypTqM4Lk97zIQQtyOthiEhXhRWNwfajsJycwWBlL3T5glmX6UAJqWmeeQDfzJ5IfBMX+bnw1yw5plaYbcLoqJainMQRmy/IokM3nHZy+dPJ9KN2RGkdpYpg1P95dBOBWv5i3IQU3BBiR3+Na3wzyVXQkHZrRRhCmVEueopTY/n3PIShCLO/KXdYdVgeUHLRsFXWrpFJ+oNf5gImY9QOlKepbOofbg/e0wjEFZFQe3BBB5iQSFH/qTPTYeF80ZeQIprTmjDvB8mkE8AxLLdBuRL4KxRecLH1kZ9YLdKaG9y3KliX6YOqCL8/bLSDKVH05bVkgtKtlMCvIQhVORpainGf2gDkeKMSAxeWkPi1NwO4z5u5VP6znOs9bDVnzs8wQxUYG/aEethm3QBxdw1lDVXtRfqgcxJ28F3sNdngP4NRbKlfXFgsCSrVKYV9Y1n/qG5Rt+KcNM0Y0z9d3oh0ef8crvU8uG33JRzkIPyNUzmAvbzgJPTA8OZgwqqWZntuWBhWSI8gkYQlcq/qbJ0asZ0bYzroU2zDAZaQgp2eaixULRr7paueYNlxf0yXlqY9wKmzHRGqKtVotd2H6ZDMF9J+pGUpcmhwEIimxBgwChpZeiHARQojZzlRLZKFpLHwpruVgXwTDxoi0kyV943SW5kR0ofjmnjMKOMn1+wfCVliEchW3V2P4D9YQJrlho2sMyXt2WH52s7Wubk8PY20tL+26WZZ7VsaoqtFlz2Wy0/4Ar6Io5U8pqUayNdg1QySEmJktAMHIV2ayp8x7+AmTlkA2W/NRaqgkt2W6TJQAFE55K7j1EKId4Rl17mlq31g+ez2HTaAkhl5sgzZ3qlG2BVqm+cM1B8e+SJbJWbslSkPO/7X1qSj57NOveBrzPMKgniokgdwzeT69bhgZovntSM93wlTsIbBFFqU01n+Oa2HqbVEYK21gXi8ldoPjqk5HhBhcN6MXpNWp27AwZ3Oclx8uMzxnZgz+Xc4ctih+WXRNkxx6w5XW0F8g42wrLUKlSVmuB0GnLI0rNpDiYOJZrtqJGt7KamyLInb0GMYjLNskYhUKxwIZHzwVoYkoTU/taSPMn+jaYgwWbu4vNndY/Bglbdju+RfMvpSpptc741xIEWcLYCIPWoZXXWkY+Wo9WfarFnW0qVl2YjBEVDplzx3+Un7TUrGxKMsG5CdEBnVULKsUI9UdRD3UbVBahwYw7G25CbjPIziE7YHySdMwBkghJJnG0AXOXKsAI9arOhHmaqSyigXyzpUP4y7OYAA9Oo3WqTLFIS0OVYdyPpNrwhf2oBaSZFBB0kL50WEu+JohT7jJHGHCwFEy6Y85VBqZTliEg2v+shIG3KBqyyXdytJTnYsu2gTfCTBT/er+3x77VPqo+2WJm5hepvSYrf67UIwjTThC1KrYwXV4nf3no5yxZ01FnKq+fnc0aiSblkxK09UaXTuuP7bgltYwl9sEWpnOKp4C/aPCmrCUtGw7XASq06ee4J63a6nZ4I7wYNwtEkSmbF1vcHM4gvBFpZDvpJqG9fa19vugWOlnTHUdDVtO2B3uvWex3kxHmr8asgde0eK6yVbIM+eglbko5xqXTfVjHRci07fFDB3APU7CZm+6R0o1+bExsSElUlJwso2lNrRdymB1/WMt1nW9FHQ6+UeQJtvPUamTV7h4+bIhh2bTwJ1VKFTGmOSmwQ6ct+y03cNYvm2oHP6e8XdyW3TwuZpO8hti0mvdJ8z5budHssUwWwcbrphoTLI5DLzHxQ8M8wRrFn7GRNbpzyVYnXU45x+nK1lfw+/3i40anH+rKZxH93X1GCdKd279ZLaw1guxsTOPmhmhx/WHL1v11NSFr3F1uSkyf8Tt3SHokUqXd2pQtk5NM2cdWxOHjlq32U/30mCLT2AwxhzXNV5SjpFPimKOpiT0o34r4tI2+PLxQjpFlssUpTfxw1/Y/20G0SNYjsQRMkJmzXg4EVpFgotyOwswonsdN2NPY3pUrvjRzbseh+PJowydLnDHqKGmkjMNzTKzjkc2J7JC4VNsJUvzkkOZwnVHYHMtrVr4mBZglmhpC5oB1sFXMEDAWPz1uuh4+U4RxrbGkazwR3GuaOUebiYbYz4L+xcHZ9HiCtfqBsUp5byZVbiLXbIIetTk+xmP9yyPA6SmI8ez3EqmmC4YpmynbdJ6l3a2vGZ8PM+eQSxwxszo3s2kyXluD2m0nc/LUJ8YXx7KjiPlhu1MgA8dxUtKCTRBiSNqv+8+Mrw6YgzI9q3Cxhwhum3G2jEbMKH4q950D5vmsfH0mQrvgm5mX+M+NwB/8/1yL7x76zxXm5gpgp/o3x2waQzQB8dPl7x76jy6LJ1RuYRQ2FL16zgCbi59g3m5xKPPtBzFmD/UYJJ7MsMODzWYecWesir95pCQqzOsTN4+xed5cJjNut/XfPBzz4QElf3hozPDbxnJbRtwef/NwjD2DM1ljj4xw8Ojl8JJ+j8fjbx/zsQeWZo90xTgYZJSGx+pfHljyR6+urwB86kEpfcFp9T8/evX6ENlh/DgY6f96iOzlcTi7ee1h/cnjcP8BkM+p2RQxTewAAAAASUVORK5CYII=);
}

#ts .planet {
  background-image: url(data:image/png;base64,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);
}

#tailwindcss .planet {
  background-image: url(data:image/png;base64,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);
}

#neptune .planet {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAABGdBTUEAALGPC/xhBQAAAGBQTFRFZoGyU2ybWHKiU2yZV3CgVm+eVm+dV3GhVG2bAAAAmLjslbbqk7ToZIO3aovBZ4e7cJTMkLHmbI/FYX+yXnusWnWlja7kiavhc5fRg6bdhqjfeZ3WgKTbdprUfqHZe5/XTjN33QAAAAp0Uk5T82DQILiggOhMAI3C2HIAAAPgSURBVEjHjZaLVqNAEEQxkoAmIAYIb/j/v9yuqp4BNetum8R4Dtfq6elX8vbE8kt6apsWdkov+bNHkp/QOWvbpqlhTQM6O+f/5F4Mag0qPmSFwUBffuXyLEBleaeVpaNZ/lfuNTWoMMSYqur7pTerqjtQI9PX51yekSICW2DTsvTV/U7yKLlzFxP7gJIAMZPZAlSal5/cuW0oFigA9t62jSi9bdrzdw4YKTw6TfrcgNkX+wpvywOYRCcd29YNLzy+8su6umRvYB1cFZfjbMD4FF6rPmR0lr6aYr5zrxmxBWpusz7nnQNYlUWbvUYubS2ScjJgMxD/2MH+/lG3aeByHs6xmTaY2R/DwL94UESnj56Co5cW/wM2DuMo3N5z8NWyB4KZuJe2LuglqIEUbNhtlq/IuwqCL+SypvDDyb9h6Dqj8BpHvgdydoc6YZOBy1t5KTnY2BkI6/gDZXELr988zY07Q245yAE7GhQRG+QPU7VozsbRzckxONZ1j91cGorh9o3L3hK6aVm5Omfe2eOfZvglshsV1G0Ld5gnF7qJpJoVC8p93m4gRUNS14iaWsBdkvToJgQld7uRjCDzgLVojtZNmpwQTXDrzn2Cu15vDhvIE+p8POAp0S2Qm3l1D9e7wggqOkrThQdsWnJL5HAH0rte39/fAUZuVmB6BibohXtwvZu4d+eMHDzXvnKLH5B3/l3vU5hu8AvXRy44+lWvG0NuH7gi6s2Bo6PCwHVDyG1dfCHO7h2NyxMmCN5iOJVpIWFUSsmpcS4mWoioru/xCAmq3BZ3snypwcWL8JuHIl4Pcp37OakgrMckFwsMywh+oikMI2/iEbIsFgTzs1dYLlYPTShbNbChe8RCwuEcw/mm2Clyrz8JsuMOLNZDAVLMK16cdSbVu2W2WrvVYaz3HTMvvFH47Z3VX4qyNykLjY2gNQR1bxPhCryK2EHZzyyi08YjTmjP86HJhCYhrj/0M+ufjIwlG2OqQhyjDfHqvPhq75+MjA0jVu+ssA7sGV/a7jSFbpbF+aCxogGxBXBW9/agqH169wzzyMeY0m3dfEqEoUQnUOmSS4/zT9OWU5qp6hMmjsItrAfNYf5xkn0I3CaN5n1qhoLlblA3+ff57iCig55+mNUcfhzTdXP5sU94cBZ2rYnbhLQnbjEVl5/zk/0Faw9Kaln21Wfa1KQxh57tL9qXdI991UdQ/4ar1vN9Ke5nZRkWNC5pKPAKa6GlV/7LPlhD1Ha7SssgpAyCj3/bB+P+GdfP0n7ugGzx/WX/9H0XO3Khfdd+FVhbm3/su0/2a9uw/2e/3vf59td9/g/87+wnzrJ1rQAAAABJRU5ErkJggg==);
}
</style>
