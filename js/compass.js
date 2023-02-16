document.addEventListener("DOMContentLoaded", function () {

    const outterSpans = document.querySelectorAll('.outter');
const compassInner = document.querySelector('.compass-inner img');
const directions = document.querySelectorAll('.dir');

outterSpans.forEach((span, index) => {
  span.addEventListener('click', () => {
    outterSpans.forEach(s => s.classList.remove('active'));
    span.classList.add('active');

    directions.forEach(dir => dir.classList.remove('active'));
    directions[index].classList.add('active');

    const followingContentDivs = document.querySelectorAll('.outter ~ .content.visible');
    followingContentDivs.forEach(div => div.classList.remove('visible'));

    const contentDiv = span.nextElementSibling;
    contentDiv.classList.add('visible');

    const rotateDiv = document.querySelector('.compass-rotate');
    rotateDiv.classList.remove('north', 'east', 'south', 'west');

    if (span.classList.contains('north')) {
      rotateDiv.classList.add('north');
      compassInner.classList.remove('east', 'south', 'west');
      compassInner.classList.add('north');
    } else if (span.classList.contains('east')) {
      rotateDiv.classList.add('east');
      compassInner.classList.remove('north', 'south', 'west');
      compassInner.classList.add('east');
    } else if (span.classList.contains('south')) {
      rotateDiv.classList.add('south');
      compassInner.classList.remove('north', 'east', 'west');
      compassInner.classList.add('south');
    } else if (span.classList.contains('west')) {
      rotateDiv.classList.add('west');
      compassInner.classList.remove('north', 'east', 'south');
      compassInner.classList.add('west');
    }
  });
});





});