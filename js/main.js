var myObject = new Vue({
    el: '#app',
    computed: {
      levelsText: function() {
        if (this.showLevels)
          return 'Hide Levels List';
        return 'Show Levels List';
      }
    },
    data: {
      name: '',
      email: '',
      mechanics: '',
      pacing: '',
      general: '',
      bugs: '',
      showLevels: false,
      submitSuccess: false,
      levelsData: [
        {
          show: false,
          name: 'Dipped Toes',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/01.+Dipped+Toes-1.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Sideways',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/02.+Sideways-8.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Friction',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/03.+Friction-19.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Pitstop',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/04.+Pitstop-21.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Stranded',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/05.+Stranded-22.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'About Turn',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/06.+About+Turn-23.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Revisit',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/07.+Revisit-24.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Horizons',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/08.+Horizons-25.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Inertia',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/09.+Inertia-26.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Narrow Pass',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/10.+Narrow+Pass-27.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Rivers',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/11.+Rivers-28.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Boxed In',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/12.+Boxed+In-29.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Plen Air',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/13.+Plen+Air-30.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Acrylic',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/014.+Acrylic-2.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Deflect',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/015.+Deflect-3.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Circus',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/016.+Circus-4.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Coastline',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/017.+Coastline-5.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Mirroring',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/018.+Mirroring-6.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Stacks',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/019.+Stacks-7.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Distributaries',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/021.+Distributaries-10.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Leverage',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/020.+Leverage-9.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Reflections',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/022.+Reflections-11.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Constant Pressure',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/023.+Constant+Pressure-12.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Overhang',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/024.+Overhang-13.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Roundabout',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/025.+Roundabout-14.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Backup Plan',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/026.+Backup+Plan-15.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Pivot',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/027.+Pivot-16.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Baggage',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/028.+Baggage-17.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Breakthrough',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/029.+Breakthrough-18.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
        {
          show: false,
          name: 'Back Home',
          videoLink: 'https://chapliboy.s3.amazonaws.com/mis_level_videos/030.+Back+Home-20.m4v',
          difficulty: 0,
          interest: 0,
          notes: ''
        },
      ],
    },
    methods: {
      toggleLevels: function() {
        this.showLevels = !this.showLevels;
      },
      toggleLevelShow: function(index) {
        this.levelsData[index].show = !this.levelsData[index].show;
      },
      submitFeedback: function() {
        this.saveDataToStorage();
      },
      initLocalStorage: function() {
        localStorage.setItem("mis_playtest_id", this.generateId());
        this.saveDataToStorage();
      },
      getId: function() {
        return localStorage.getItem("mis_playtest_id");
      },
      getFeedbackData: function() {
        var feedback = {};
        feedback.id = this.getId();
        feedback.name = this.name;
        feedback.email = this.email;
        feedback.mechanics = this.mechanics;
        feedback.pacing = this.pacing;
        feedback.general = this.general;
        feedback.bugs = this.bugs;
        var levels = [];
        for (var i=0; i<this.levelsData.length; i++) {
          var fb = {
            difficulty: this.levelsData[i].difficulty,
            interest: this.levelsData[i].interest,
            notes: this.levelsData[i].notes,
          }
          levels.push(fb);
        }
        feedback.levels = levels;
        return feedback;
      },
      saveDataToStorage: function() {
        localStorage.setItem("feedback", JSON.stringify(this.getFeedbackData()));
      },
      loadDataFromStorage: function() {
        if (this.getId() === null) {
          this.initLocalStorage();
        } else {
          var fb = JSON.parse(localStorage.getItem("feedback"));
          this.name = fb.name;
          this.email = fb.email;
          this.mechanics = fb.mechanics;
          this.pacing = fb.pacing;
          this.general = fb.general;
          this.bugs = fb.bugs;
          for (var i=0; i<fb.levels.length; i++) {
            this.levelsData[i].difficulty = fb.levels[i].difficulty;
            this.levelsData[i].interest = fb.levels[i].interest;
            this.levelsData[i].notes = fb.levels[i].notes;
          }
        }
      },
      generateId: function() {
         var result           = '';
         var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var charactersLength = characters.length;
         for ( var i = 0; i < 32; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
         return result;
      }
    },
    mounted: function() {
      this.loadDataFromStorage();
      setInterval(this.saveDataToStorage, 5000);
    },
    destroyed: function() {
      this.saveDataToStorage();
    },
})
