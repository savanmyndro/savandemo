import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThemeService } from '../../theme.service';
import * as $ from 'jquery';

// declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  darkTheme =  new FormControl(true);
  expertProfessionList: string[] = [];
  searchText :any;
  searchMode: any = true;

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe((value: any) => {
      if (value) {
        this.themeService.toggleLight();
      } else {
        this.themeService.toggleDark();
      }
    });
  }
  
  ngOnInit(): void {
    $(document).ready(function() {
      // alert('I am Called From jQuery');
    });
    

    var tabs = $(".tabs");
    var selector = $(".tabs").find("a").length;
    //var selector = $(".tabs").find(".selector");
    var activeItem :any  = tabs.find(".active");
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
      left: activeItem.position.left + "px",
      width: activeWidth + "px"
    });

    $(".tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
        left: itemPos.left + "px",
        width: activeWidth + "px"
    });
    });


    // this.darkTheme.valueChanges.subscribe(value => {
    //   if (value) {
        this.themeService.toggleLight();
      // } else {
        // this.themeService.toggleDark();
    //   }
    // });
    this.expertProfessionList = [
      'Personal Development Coach',
      'Mindset Coach',
      'Transformational Coach',
      'Human Performance Coach',
      'Human Behavioural Expert',
      'Life Strategist',
      'Empowerment Coach',
      'Success Coach',
      'Achievements Facilitator',
      'Performance Coach',
      'Personal Results Coach',
      'Personal Mentor',
      'Motivational Coach',
      'Health and Wellness Coach',
      'Life Transformation Strategist',
      'Small Business Coach',
      'Career Coach',
      'Parenting Family Coach',
      'Executive Coach',
      'Spiritual Life Coach',
      'Mind and Body Coach',
      'Wellness Coach',
      'Reiki Master',
      'Brain Power Coach',
      'Others'
    ];
    window.addEventListener('scroll', this.scroll, true); //third parameter
    // throw new Error('Method not implemented.');
  }
    


  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event:any): void => {
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 1 && window.innerWidth > 1020) {
      $('.wrapper').removeClass('visible');
      $('.desktopscroll').removeClass('invisible');
      $('.wrapper').addClass('invisible');
      $('.desktopscroll').addClass('visible');
      $('.desktopscroll').addClass('slideUp');
    } else if(document.documentElement.scrollTop < 1 && window.innerWidth > 1020) {
      $('.wrapper').removeClass('invisible');
      $('.desktopscroll').removeClass('visible');
      $('.wrapper').addClass('visible');
      $('.desktopscroll').addClass('invisible');
      $('.desktopscroll').removeClass('slideUp');
      // $('.desktopscroll').addClass('slideDown');
      $('.wrapper').addClass('slideDown');
      
    }
    // console.log("hello",event,document.body.scrollTop,document.documentElement.scrollTop);
    
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };
}
