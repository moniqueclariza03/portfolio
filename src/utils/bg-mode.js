const bgMode =() => {
    const themeToggleBtns  = document.querySelectorAll('#theme-toggle');

    //state
    const theme = localStorage.getItem('theme');

    //OnMount 
    theme && document.body.classList.add(theme);

    //handlers

    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.contains('light-mode')? localStorage.setItem('theme', 'light-mode'): localStorage.removeItem('theme');
    };

    //Events 
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click',handleThemeToggle);
    })
}
export default bgMode;