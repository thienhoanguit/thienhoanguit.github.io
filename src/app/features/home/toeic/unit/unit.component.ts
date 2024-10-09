import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-unit',
	templateUrl: './unit.component.html',
	styleUrl: './unit.component.scss'
})
export class UnitComponent {
	unitName: string | null = '';
	jsonPath: string | null = '';
	unitData: any;
	practiceData: any;
	testData: any;
	isLoading: boolean = true;
	selectedUnit: any;
	selectedUnitPart3: any;
	selectedUnitPart4: any;
	@ViewChild('audioPlayerPart2') audioPlayerPart2!: ElementRef;
	@ViewChild('audioPlayerPart3') audioPlayerPart3!: ElementRef;
	@ViewChild('audioPlayerPart4') audioPlayerPart4!: ElementRef;

	constructor(private route: ActivatedRoute, private _http: HttpClient) {

	}

	ngOnInit(): void {
		// Nhận giá trị của unit_name từ URL
		this.unitName = this.route.snapshot.paramMap.get('unit_name');
		this.jsonPath = `assets/data/json/${this.unitName}.json`;
		this._http.get(this.jsonPath).subscribe(res => {
			this.unitData = res;
			this.practiceData = [];
			for (let index = 0; index < 13; index++) {
				this.practiceData.push({
					userAnswers: Array(5).fill(''),
					showResults: false,
					results: [],
					totalScore: 0
				})
			}
			this.testData = {
				userAnswers: Array(30).fill(''),
				showResults: false,
				results: [],
				totalScore: 0
			};

			this.isLoading = false;
		});

	}

	checkAnswers(unit: any) {
		this.practiceData[unit.Unit - 1].results = [];
		for (let i = 0; i < unit.Part2.Quiz.length; i++) {
			const userAnswer = this.practiceData[unit.Unit - 1].userAnswers[i];
			const correctAnswer = unit.Part2.Quiz[i].CorrectAnswer;
			if (userAnswer === correctAnswer) {
				this.practiceData[unit.Unit - 1].results.push('correct');
			} else {
				this.practiceData[unit.Unit - 1].results.push('incorrect');
			}
		}
		this.practiceData[unit.Unit - 1].showResults = true;
		// Tính điểm
		for (let i = 0; i < unit.Part2.Quiz.length; i++) {
			if (this.practiceData[unit.Unit - 1].userAnswers[i] === unit.Part2.Quiz[i].CorrectAnswer) {
				this.practiceData[unit.Unit - 1].totalScore += 1; // Mỗi câu đúng được 1 điểm
			}
		}
	}

	checkAnswersFinal() {
		this.testData.results = [];
		for (let i = 0; i < this.unitData.Test.Quiz.length; i++) {
			const userAnswer = this.testData.userAnswers[i];
			const correctAnswer = this.unitData.Test.Quiz[i].CorrectAnswer;
			if (userAnswer === correctAnswer) {
				this.testData.results.push('correct');
			} else {
				this.testData.results.push('incorrect');
			}
		}
		this.testData.showResults = true;
		// Tính điểm
		for (let i = 0; i < this.unitData.Test.Quiz.length; i++) {
			if (this.testData.userAnswers[i] === this.unitData.Test.Quiz[i].CorrectAnswer) {
				this.testData.totalScore += 1; // Mỗi câu đúng được 1 điểm
			}
		}
	}

	resetQuiz(unit: any) {
		this.practiceData[unit.Unit - 1].userAnswers.fill('');
		this.practiceData[unit.Unit - 1].showResults = false;
		this.practiceData[unit.Unit - 1].results = [];
		this.practiceData[unit.Unit - 1].totalScore = 0;
	}

	resetQuizFinal() {
		this.testData.userAnswers.fill('');
		this.testData.showResults = false;
		this.testData.results = [];
		this.testData.totalScore = 0;
	}

	onUnitChange(part: number) {
		if (part == 2) {
			let a = this.audioPlayerPart2.nativeElement;
			a.load();
		} else if(part == 3) {
			let a = this.audioPlayerPart3.nativeElement;
			a.load();
			
		} else {
			let a = this.audioPlayerPart4.nativeElement;
			a.load();
			
		}
	}
}
