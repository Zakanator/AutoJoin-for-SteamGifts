// Call this function when #settingsDiv is present on the page.
function loadSettings() {
  chrome.storage.sync.get({
    AutoJoinButton: false,
    AutoDescription: true,
    IgnoreGroups: false,
    IgnorePinned: true,
    IgnoreRegionLocked: false,
    IgnoreWhitelist: false,
    IgnoreGroupsBG: false,
    IgnorePinnedBG: true,
    PageForBG: 'wishlist',
    RepeatHoursBG: 5,
    PagesToLoad: 3,
    PagesToLoadBG: 2,
    BackgroundAJ: false,
    LevelPriorityBG: true,
    OddsPriorityBG: false,
    InfiniteScrolling: true,
    ShowPoints: true,
    ShowButtons: true,
    SteamProfileData: false,
    LoadFive: false,
    HideDlc: false,
    HideEntered: false,
    HideGroups: false,
    HideMinChance: 0.01,
    HideNonTradingCards: false,
    HideRegionLocked: false,
    HideWhitelist: false,
    PriorityGroup: false,
    PriorityRegion: false,
    PriorityWhitelist: false,
    PriorityWishlist: true,
    RepeatIfOnPage: false,
    RepeatHours: 5,
    NightTheme: false,
    LevelPriority: false,
    PlayAudio: true,
    AudioVolume: 1,
    Delay: 10,
    DelayBG: 10,
    MinLevelBG: 0,
    MinCost: 0,
    MinCostBG: 0,
    PointsToPreserve: 0,
    WishlistPriorityForMainBG: false,
    IgnorePreserveWishlistOnMainBG: false,
    ShowChance: true,
  }, (settings) => {
    fillSettingsDiv(settings);
  });
}

function fillSettingsDiv(settings) {
  document.getElementById('chkAutoJoinButton').checked = settings.AutoJoinButton;
  document.getElementById('chkAutoDescription').checked = settings.AutoDescription;
  document.getElementById('chkInfiniteScroll').checked = settings.InfiniteScrolling;
  document.getElementById('chkShowPoints').checked = settings.ShowPoints;
  document.getElementById('chkShowButtons').checked = settings.ShowButtons;
  document.getElementById('chkSteamProfileData').checked = settings.SteamProfileData;
  document.getElementById('chkLoadFive').checked = settings.LoadFive;
  document.getElementById('chkHideDlc').checked = settings.HideDlc;
  document.getElementById('chkHideEntered').checked = settings.HideEntered;
  document.getElementById('chkHideGroups').checked = settings.HideGroups;
  document.getElementById('hideMinChance').value = settings.HideMinChance;
  document.getElementById('chkHideNonTradingCards').checked = settings.HideNonTradingCards;
  document.getElementById('chkHideRegionLocked').checked = settings.HideRegionLocked;
  document.getElementById('chkHideWhitelist').checked = settings.HideWhitelist;
  document.getElementById('chkNightTheme').checked = settings.NightTheme;
  // document.getElementById("chkLevelPriority").checked = settings.LevelPriority;
  document.getElementById('chkRepeatIfOnPage').checked = settings.RepeatIfOnPage;
  document.getElementById('chkIgnoreGroups').checked = settings.IgnoreGroups;
  document.getElementById('chkIgnorePinned').checked = settings.IgnorePinned;
  document.getElementById('chkIgnoreRegionLocked').checked = settings.IgnoreRegionLocked;
  document.getElementById('chkIgnoreWhitelist').checked = settings.IgnoreWhitelist;
  document.getElementById('chkIgnoreGroupsBG').checked = settings.IgnoreGroupsBG;
  document.getElementById('chkIgnorePinnedBG').checked = settings.IgnorePinnedBG;
  document.getElementById('chkEnableBG').checked = settings.BackgroundAJ;
  document.getElementById('chkGroupPriority').checked = settings.PriorityGroup;
  document.getElementById('chkRegionPriority').checked = settings.PriorityRegion;
  document.getElementById('chkWhitelistPriority').checked = settings.PriorityWhitelist;
  document.getElementById('chkWishlistPriority').checked = settings.PriorityWishlist;
  document.getElementById('chkLevelPriorityBG').checked = settings.LevelPriorityBG;
  document.getElementById('chkOddsPriorityBG').checked = settings.OddsPriorityBG;
  document.getElementById('chkPlayAudio').checked = settings.PlayAudio;
  document.getElementById('audioVolume').value = settings.AudioVolume;
  document.getElementById('chkShowChance').checked = settings.ShowChance;
  document.getElementById('hoursField').value = settings.RepeatHours;
  document.getElementById('pagestoload').value = settings.PagesToLoad;
  document.getElementById('pagestoloadBG').value = settings.PagesToLoadBG;
  document.getElementById('pageforBG').value = settings.PageForBG;
  document.getElementById('delayBG').value = settings.DelayBG;
  document.getElementById('delay').value = settings.Delay;
  document.getElementById('minLevelBG').value = settings.MinLevelBG;
  document.getElementById('minCost').value = settings.MinCost;
  document.getElementById('minCostBG').value = settings.MinCostBG;
  document.getElementById('pointsToPreserve').value = settings.PointsToPreserve;
  document.getElementById('chkWishlistPriorityForMainBG').checked = settings.WishlistPriorityForMainBG;
  document.getElementById('chkIgnorePreserveWishlistOnMainBG').checked = settings.IgnorePreserveWishlistOnMainBG;
  if (settings.RepeatHoursBG === 0) {
    document.getElementById('hoursFieldBG').value = '0.5';
  } else {
    document.getElementById('hoursFieldBG').value = settings.RepeatHoursBG;
  }

  settingsAttachEventListeners();
}

function settingsAttachEventListeners() {
  const saveButtonEl = document.getElementById('btnSetSave');
  saveButtonEl.addEventListener('click', () => {
    chrome.storage.sync.set({
      AutoJoinButton: document.getElementById('chkAutoJoinButton').checked,
      AutoDescription: document.getElementById('chkAutoDescription').checked,
      InfiniteScrolling: document.getElementById('chkInfiniteScroll').checked,
      ShowPoints: document.getElementById('chkShowPoints').checked,
      ShowButtons: document.getElementById('chkShowButtons').checked,
      SteamProfileData: document.getElementById('chkSteamProfileData').checked,
      LoadFive: document.getElementById('chkLoadFive').checked,
      HideDlc: document.getElementById('chkHideDlc').checked,
      HideEntered: document.getElementById('chkHideEntered').checked,
      HideGroups: document.getElementById('chkHideGroups').checked,
      HideMinChance: parseFloat(document.getElementById('hideMinChance').value, 10),
      HideNonTradingCards: document.getElementById('chkHideNonTradingCards').checked,
      HideRegionLocked: document.getElementById('chkHideRegionLocked').checked,
      HideWhitelist: document.getElementById('chkHideWhitelist').checked,
      RepeatIfOnPage: document.getElementById('chkRepeatIfOnPage').checked,
      NightTheme: document.getElementById('chkNightTheme').checked,
      // LevelPriority: document.getElementById("chkLevelPriority").checked,
      LevelPriorityBG: document.getElementById('chkLevelPriorityBG').checked,
      OddsPriorityBG: document.getElementById('chkOddsPriorityBG').checked,
      BackgroundAJ: document.getElementById('chkEnableBG').checked,
      PriorityGroup: document.getElementById('chkGroupPriority').checked,
      PriorityRegion: document.getElementById('chkRegionPriority').checked,
      PriorityWhitelist: document.getElementById('chkWhitelistPriority').checked,
      PriorityWishlist: document.getElementById('chkWishlistPriority').checked,
      IgnoreGroups: document.getElementById('chkIgnoreGroups').checked,
      IgnorePinned: document.getElementById('chkIgnorePinned').checked,
      IgnoreRegionLocked: document.getElementById('chkIgnoreRegionLocked').checked,
      IgnoreWhitelist: document.getElementById('chkIgnoreWhitelist').checked,
      IgnoreGroupsBG: document.getElementById('chkIgnoreGroupsBG').checked,
      IgnorePinnedBG: document.getElementById('chkIgnorePinnedBG').checked,
      PlayAudio: document.getElementById('chkPlayAudio').checked,
      AudioVolume: document.getElementById('audioVolume').value,
      RepeatHours: document.getElementById('hoursField').value,
      RepeatHoursBG: parseInt(document.getElementById('hoursFieldBG').value, 10),
      PagesToLoad: parseInt(document.getElementById('pagestoload').value, 10),
      PagesToLoadBG: parseInt(document.getElementById('pagestoloadBG').value, 10),
      PageForBG: document.getElementById('pageforBG').value,
      DelayBG: parseInt(document.getElementById('delayBG').value, 10),
      Delay: parseInt(document.getElementById('delay').value, 10),
      MinLevelBG: parseInt(document.getElementById('minLevelBG').value, 10),
      MinCost: parseInt(document.getElementById('minCost').value, 10),
      MinCostBG: parseInt(document.getElementById('minCostBG').value, 10),
      PointsToPreserve: parseInt(document.getElementById('pointsToPreserve').value, 10),
      WishlistPriorityForMainBG: document.getElementById('chkWishlistPriorityForMainBG').checked,
      IgnorePreserveWishlistOnMainBG: document.getElementById('chkIgnorePreserveWishlistOnMainBG').checked,
      ShowChance: document.getElementById('chkShowChance').checked,
    }, () => {
      if (document.location.protocol !== 'http:' && document.location.protocol !== 'https:') {
        saveButtonEl.innerText = 'Settings Saved!';
        saveButtonEl.disabled = true;
        setTimeout(() => {
          saveButtonEl.innerText = 'Save';
          saveButtonEl.disabled = false;
        }, 500);
      } else {
        window.location.reload();
      }
    });
  });

  // grant "*://steamcommunity.com/profiles/*" permission
  document.getElementById('chkSteamProfileData').addEventListener('change', function () {
    if (this.checked) {
      // chrome.permissions.* API is not available in content script
      // we'll have to message background script to check if we have it

      // set new event listener for anticipated response
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.granted === 'true') {
          // we have permission, do nothing
        } else if (request.granted === 'false') {
          // we don't have permission, uncheck this option
          this.checked = false;
        }
      });
      chrome.runtime.sendMessage({ task: 'checkPermission', ask: 'true' });
    }
  });

  // to show 0.5 when value goes below 1 in hoursFieldBG field
  document.getElementById('hoursFieldBG').addEventListener('input', function () {
    console.log(this.value);
    if (this.value === 0) this.value = 0.5;
    else if (this.value % 1 !== 0 && this.value > 1) {
      this.value = parseInt(this.value, 10);
    }
  });

  const settingsCancelElements = document.getElementsByClassName('settingsCancel');
  Array.from(settingsCancelElements).forEach((element) => {
    element.addEventListener('click', () => {
      const settingsShadeEl = document.getElementById('settingsShade');
      const settingsDivEl = document.getElementById('settingsDiv');
      settingsShadeEl.classList.remove('fadeIn');
      settingsShadeEl.classList.add('fadeOut');
      settingsDivEl.classList.remove('fadeIn');
      settingsDivEl.classList.add('fadeOut');
    });
  });

  const volumeSlider = document.getElementById('audioVolume');
  volumeSlider.addEventListener('click', setAudioVolume);

  processDependentSettings();
}

function setAudioVolume() {
  // play audio when changing volume
  const audio = new Audio(chrome.extension.getURL('/audio.mp3'));
  audio.volume = document.getElementById('audioVolume').value;
  audio.play();
}

/* This is for case when window.innerHeight is less than settings div height. */
function fitSettings() {
  if (window.innerHeight < document.getElementById('settingsDiv').clientHeight) {
    document.getElementById('settingsDiv').className += ' fit';
  }
}

/* Show/Hide some settings that don't make sense on their own. */
function processDependentSettings() {
  const AutoJoinButton = document.getElementById('chkAutoJoinButton');
  const EnableBG = document.getElementById('chkEnableBG');
  evalDependent();

  function evalDependent() {
    const DependOnAutoJoinButton = document.querySelectorAll('.dependsOnAutoJoinButton');
    const DependOnBackgroundAutoJoin = document.querySelectorAll('.dependsOnBackgroundAutoJoin');

    DependOnAutoJoinButton.forEach((li) => {
      li.style.display = AutoJoinButton.checked ? 'block' : 'none';
    });

    DependOnBackgroundAutoJoin.forEach((li) => {
      li.style.display = EnableBG.checked ? 'block' : 'none';
    });

    fitSettings();
  }
  AutoJoinButton.addEventListener('change', evalDependent);
  EnableBG.addEventListener('change', evalDependent);
}
