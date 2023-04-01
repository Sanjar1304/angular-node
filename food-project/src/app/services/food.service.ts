import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Food } from '../shared/models/Foods';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:  HttpClient) { }


  getAll(): Food[]{
    return sample_foods
  }




}
