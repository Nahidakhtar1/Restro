import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export const $animations = [

	trigger('animate', [
  
	  state('idle', style({ opacity: 0 }) ),
  
	  transition('* => landing', [
		style({
		  transform: 'scale(1.2)',
		  opacity: 0
		}), 
		animate('{{timing}} ease', style('*'))
	  ], { params: { timing: '2s'}}),
  
	  transition('* => pulse', [
		style('*'),
		animate('{{timing}} ease-in-out', 
		  keyframes([
			style({ transform: 'scale(1)' }),
			style({ transform: 'scale(1.05)' }),
			style({ transform: 'scale(1)' })
		  ])
		)], { params: { timing: '1s'}}
	  ),
  
	  transition('* => beat', [
		style('*'),
		animate('{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)', 
		  keyframes([
			style({ transform: 'scale(0.8)' }),
			style({ transform: 'scale(1.5)' }),
			style({ transform: 'scale(1)' })
		  ])
		)], { params: { timing: '500ms'}}
	  ),
  
	  transition('* => heartBeat', [
		style('*'),
		animate('{{timing}} ease-in-out', 
		  keyframes([
			style({ transform: 'scale(1)', offset: 0 }),
			style({ transform: 'scale(1.3)', offset: 0.14 }),
			style({ transform: 'scale(1)', offset: 0.28 }),
			style({ transform: 'scale(1.3)', offset: 0.42 }),
			style({ transform: 'scale(1)', offset: 0.70 })
		  ])
		)], { params: { timing: '1s'}}
	  ),
  
	  transition('* => fadeIn', [
		style({ opacity: 0 }),
		animate('{{timing}} ease-in', style('*'))
	  ], { params: { timing: '1s'}}),
  
	  transition('* => fadeInRight', [
		style({ opacity: 0, transform: 'translateX(-20px)' }),
		animate('{{timing}} ease-in', style('*'))
	  ], { params: { timing: '1s'}}),
  
	  transition('* => fadeInLeft', [
		style({ opacity: 0, transform: 'translateX(20px)' }),
		animate('{{timing}} ease-in', style('*'))
	  ], { params: { timing: '1s'}}),
  
	  transition('* => fadeInUp', [
		style({ opacity: 0, transform: 'translateY(20px)' }),
		animate('{{timing}} ease-in', style('*'))
	  ], { params: { timing: '1s'}}),
  
	  transition('* => fadeInDown', [
		style({ opacity: 0, transform: 'translateY(-20px)' }),
		animate('{{timing}} ease-in', style('*'))
	  ], { params: { timing: '1s'}}),
  
	  transition('* => zoomIn', 
		animate('{{timing}} ease-in', 
		  keyframes([
			style({ opacity: 0, transform: 'scale(0.3)' }),
			style({ opacity: 1, transform: 'scale(0.65)' }),
			style({ opacity: 1, transform: 'scale(1)' })
		  ])
		), { params: { timing: '1s'}}
	  ),
	  
	  transition('* => bumpIn', [
		style({ transform: 'scale(0.5)', opacity: 0 }),
		animate("{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)", 
		  style({ transform: 'scale(1)', opacity: 1 }))
	  ], { params: { timing: '500ms'}}),
  
	  transition('fadeOut => void', [
		animate('{{timing}} ease-in', style({ opacity: 0 }))
	  ]),
  
	  transition('fadeOutRight => void', [
		animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateX(20px)' }))
	  ], { params: { timing: '1s'}}),
  
	  transition('fadeOutLeft => void', [
		animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
	  ], { params: { timing: '1s'}}),
  
	  transition('fadeOutDown => void', [
		animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
	  ], { params: { timing: '1s'}}),
  
	  transition('fadeOutUp => void', [
		animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
	  ], { params: { timing: '1s'}}),
  
	  transition('zoomOut => void', 
		animate('{{timing}} ease-in', 
		  keyframes([
			style({ opacity: 1, transform: 'scale(1)' }),
			style({ opacity: 0, transform: 'scale(0.3)' }),
			style({ opacity: 0, transform: 'scale(0.3)' })
		  ])
		), { params: { timing: '1s'}}
	  ),
	])
  ];
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
		}
		readonly timings = { slower: '3s', slow: '2s', normal: '1s', fast: '500ms', faster: '300ms' };
  
		constructor(private elm: ElementRef, private scroll: ScrollDispatcher, private zone: NgZone) {}
	  

 /** Selects the animation to be played */
 @Input('wmAnimate') animate: wmAnimations;

 /** Speeds up or slows down the animation */
 @Input() speed: wmAnimateSpeed = 'normal';

 /** When true, triggers the animation on element scrolling in the viewport */
 @Input('aos') set enableAOS(value: boolean) { this.aos = coerceBooleanProperty(value); }
 public aos: boolean = false;

 /** Specifies the amout of visibility triggering AOS */
 @Input() threshold: number = 0.2;

 ngOnInit() { 

   // Triggers the animation based on the input flags
   this.animateTrigger(this.elm).subscribe( trigger => {
	 // Triggers the animation to play or to idle
	 this.trigger = trigger ? this.play : this.idle;
   });
 }

}

