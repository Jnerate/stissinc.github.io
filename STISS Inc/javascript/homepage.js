const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const services_tab_cont = entry.target.querySelector('.services_tab_cont');
  
      if (entry.isIntersecting) {
        services_tab_cont.classList.add('services_tab_cont-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      services_tab_cont.classList.remove('services_tab_cont-animation');
    });
  });
  
  observer.observe(document.querySelector('.services_tab'));