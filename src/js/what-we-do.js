$(document).ready(function() {

    // типу JSON з даними
    var projectsData = {
      "projects": [
        {
          "category": "INTERIOR DESIGN",
          "icon": "icons/what-we-do/design.svg",
          "title": "Interior Design1",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "INTERIOR DESIGN",
          "icon": "icons/what-we-do/design.svg",
          "title": "Interior Design2",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "INTERIOR DESIGN",
          "icon": "icons/what-we-do/design.svg",
          "title": "Interior Design3",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "ARCHITECTURE",
          "icon": "icons/what-we-do/architecture.svg",
          "title": "Architecture1",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "PLANNING",
          "icon": "icons/what-we-do/design.svg",
          "title": "Planning1",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "PLANNING",
          "icon": "icons/what-we-do/design.svg",
          "title": "Planning2",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
            "category": "PLANNING",
            "icon": "icons/what-we-do/design.svg",
            "title": "Planning3",
            "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
          },
        {
          "category": "ARCHITECTURE",
          "icon": "icons/what-we-do/architecture.svg",
          "title": "Architecture2",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        },
        {
          "category": "ARCHITECTURE",
          "icon": "icons/what-we-do/architecture.svg",
          "title": "Architecture3",
          "description": "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
        }
      ]
    };
  

    function showProjects(category) {
      $('.what-we-do__content').empty();
      var filteredProjects = projectsData.projects.filter(function(project) {
        return project.category === category || category === 'ALL';
      });
      var numProjects = Math.min(filteredProjects.length, 3);
      for (var i = 0; i < numProjects; i++) {
        var project = filteredProjects[i];
        var $item = $('<div class="what-we-do__item"><img class="what-we-do__item_img" src="' + project.icon + '" alt="logo"><h3 class="what-we-do__item_title title">' + project.title + '</h3><p class="what-we-do__item_descr text_fz18">' + project.description + '</p></div>');
        $('.what-we-do__content').append($item);
      }
    }
  

    showProjects('ALL');

$('.what-we-do__menu-link').click(function() {
    if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).css({
    'background-color': '#fff',
    'color': '#37806B',
    'border': '1px solid #37806B'
    });
    showProjects('ALL');
    } else {
    $('.what-we-do__menu-link').removeClass('active');
    $('.what-we-do__menu-link').css({
    'background-color': '#37806B',
    'color': '#fff',
    'border': 'none'
    });
    $(this).addClass('active');
    $(this).css({
    'background-color': '#2D6A4F',
    'color': '#fff',
    'border': 'none'
    });
    showProjects($(this).text());
    }
    });
    });