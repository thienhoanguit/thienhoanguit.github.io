import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  noteId: string | null;
  noteTitle: string | null;
  noteValue: string | null;
  constructor(private route: ActivatedRoute) {
		// Nhận giá trị của unit_name từ URL
		this.noteId = this.route.snapshot.paramMap.get('note_id');
    this.noteTitle = '';
    this.noteValue = '';
  }
}
