    const addMovieBtn = document.getElementById('add-movie-btn')
    const searchBtn = document.getElementById('search-btn')

    const movies = [];

    // Vom itera prin toate filmele si le vom face output
    const renderMovies = (filter = '') => {
      const movieList = document.getElementById('movie-list');

      if (movies.length === 0) {
        movieList.classList.remove('visible')
        return;
      } else {
        movieList.classList.add('visible')
      }
      movieList.innerHTML = '';

      const filteredMovies = !filter ?
        movies :
        movies.filter(movie => movie.info.title.includes(filter));

      filteredMovies.forEach(movie => {
        const movieElement = document.createElement("li")
        const {
          info,
          ...otherInfo
        } = movie;
        console.log(otherInfo);
        // Schimbam textContentul din mvoie element cu o variabila de tip let
        // movieElement.textContent = movie.info.title
        // const {
        //   title: movieTitle
        // } = info;
        let {
          getFormatedTitle
        } = movie
        // getFormatedTitle = getFormatedTitle.bind(movie)
        getFormatedTitle = getFormatedTitle.call(movie)
        let text = getFormatedTitle() + '-';
        for (const key in info) {
          if (key !== 'title') {
            // console.log('movie . info . key este ', movie.info[key])
            text = text + `${key}: ${info[key]}`;
          }
        }
        movieElement.textContent = text;
        movieList.append(movieElement)
      });

    }

    // O sa colectam toate inputurile userului
    const addMovieHandler = () => {
      const title = document.getElementById('title').value;
      const extraName = document.getElementById('extra-name').value;
      const extraValue = document.getElementById('extra-value').value;

      if (extraName.trim() === '' || extraValue.trim() === '') {
        return;
      }


      const newMovie = {
        info: {
          set title(value) {
            if (value.trim() === '') {
              this._title = "DEFAULT"
              return;
            }
            this._title = value
          },
          get title() {
            return this._title
          },
          [extraName]: extraValue
        },
        id: Math.random(),
        getFormatedTitle() {
          return this.info.title.toUpperCase()
        }
      };

      newMovie.info.title = title;

      movies.push(newMovie)
      renderMovies()
    }

    const searchMovieHandler = () => {
      const searchTerm = document.getElementById("filter-title").value;
      renderMovies(searchTerm)
    }


    addMovieBtn.addEventListener('click', addMovieHandler)
    searchBtn.addEventListener('click', searchMovieHandler)