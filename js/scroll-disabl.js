const lockPadding = document.querySelectorAll('.lock-padding')

function bodyLock() {
  const lockPaddingValue =
    windows.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

  //   if (lockPadding.length > 0) {
  //     for (let index = 0; index < lockPadding.length; index++) {
  //       const el = lockPadding[index]
  //       el.style.paddingRight = lockPaddingValue
  //     }
  //   }

  body.style.paddingRight = lockPaddingValue
  document.body.style.overflow = 'hidden'
}

function bodyUnLock() {
  //   for (let index = 0; index < lockPadding.length; index++) {
  //     const el = lockPadding[index]
  //     el.style.paddingRight = '0px'
  //   }
  body.style.paddingRight = '0px'
  document.body.style.overflow = 'auto'
}
