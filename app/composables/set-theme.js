// on App.vue import this composable to excu the 'if statement'
export const use_set_theme = ()=>{
    
  const { theme } = useUtilStore()

  // on 1st load excute this  to the the theme of the app
  onBeforeMount(() => {
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.classList.add('dark')
      theme.value = 'dark'

    }
  })


  // on the Theme toggler comp
  const setTheme = ()=>{
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme',document.documentElement.classList)
      theme.value = 'dark'
    
  }

  return{
    setTheme
  }

}