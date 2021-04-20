/**
 * 获取系统信息
 */
function getSystemInfo() {
  return wx.getSystemInfo();
}

/**
 * 获取胶囊信息
 */
function getMenuButtonBoundingClientRect() {
  return wx.getMenuButtonBoundingClientRect();
}


async function getStatusHeight() {
  let info = await getSystemInfo(),
    statusHeight = info.statusBarHeight;
  return statusHeight;
}

async function getNavHeight() {
  let menuButtonInfo = await getMenuButtonBoundingClientRect();
  console.log(menuButtonInfo);
  let {top, height } = menuButtonInfo;
  let statusHeight = await getStatusHeight();
  return (top - statusHeight) * 2 + height + statusHeight;
  // return statusHeight + height;
}

export default getNavHeight;
