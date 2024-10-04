import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-toeic',
	templateUrl: './toeic.component.html',
	styleUrl: './toeic.component.scss'
})
export class ToeicComponent {
	private jsonVeryEasyToeicFile = 'assets/data/json/very-easy-toeic.part2.json';
	private jsonStarterToeicFile = 'assets/data/json/starter-toeic.part2.json';
	public bookOnePartTwo: any;
	public bookSecondPartTwo: any;
	data: any[]


	constructor(private _http: HttpClient) {
		_http.get(this.jsonVeryEasyToeicFile).subscribe(res => {
			this.bookOnePartTwo = res;
			console.log('res: ', res);
		});
		this.data = [];
		for (let index = 0; index < 13; index++) {
			this.data.push({
				userAnswers: Array(5).fill(''),
				showResults: false,
				results: [],
				totalScore: 0
			})
		}
	}
	checkAnswers(unit: any) {
		this.data[unit.Unit - 1].results = [];
		for (let i = 0; i < unit.Part2.Quiz.length; i++) {
			const userAnswer = this.data[unit.Unit - 1].userAnswers[i];
			const correctAnswer = unit.Part2.Quiz[i].CorrectAnswer;
			if (userAnswer === correctAnswer) {
				this.data[unit.Unit - 1].results.push('correct');
			} else {
				this.data[unit.Unit - 1].results.push('incorrect');
			}
		}
		this.data[unit.Unit - 1].showResults = true;
		// Tính điểm
		for (let i = 0; i < unit.Part2.Quiz.length; i++) {
			if (this.data[unit.Unit - 1].userAnswers[i] === unit.Part2.Quiz[i].CorrectAnswer) {
				this.data[unit.Unit - 1].totalScore += 2; // Mỗi câu đúng được 2 điểm
			}
		}
	}

	resetQuiz(unit: any) {
		this.data[unit.Unit - 1].userAnswers.fill('');
		this.data[unit.Unit - 1].showResults = false;
		this.data[unit.Unit - 1].results = [];
	}
}
