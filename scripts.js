(function() {

  window.addEventListener('load', init);

  let imgNames = [
    'la_griffith_day',
    'md_stage_bosco',
    'la_arts_district',
    'venice_skate',
    'md_crowd',
    'la_griffith_night'
  ];
  let titleInterval = null;

  function init() {
    window.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });

    showMainContainer();
    titleAnimation();
  }

  function showMainContainer() {
    let mainContainerEl = document.querySelector('.main-container');
    mainContainerEl.className = `${mainContainerEl.className} main-container--show`;
  }

  function titleAnimation() {
    let styleEl = document.getElementsByTagName('style')[0];
    let imgUrl = '';
    let alphaValue = 0;
    let intervalCount = 0;

    titleInterval = setInterval(() => {
      let imgName = imgNames.shift();
      imgNames.push(imgName);
      intervalCount += 1;

      if (intervalCount > 6) {
        alphaValue += 0.1;

        if (alphaValue > 1) {
          clearInterval(titleInterval);
          expandInfoSection();
        }
      }

      styleEl.innerHTML = titleStyles(imgName, alphaValue);
    }, 120);
  }

  function titleStyles(imgName, alphaValue) {
    return `
      .title-container__title {
        background: url('/assets/images/${imgName}.jpg') no-repeat 0 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(237,221,198,${alphaValue});
        color: #EDDDC6;
      }
    `;
  }

  function expandInfoSection() {
    let infoSectionEl = document.querySelector('.info-container');
    infoSectionEl.className = `${infoSectionEl.className} info-container__expanded`;
  }

}());
