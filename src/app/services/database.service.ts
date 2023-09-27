import { Injectable, WritableSignal, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  async setObject(obj : any) {    
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(
        obj
      )
    });
  }
  
  // JSON "get" example
  async getObject() {    
    let { value }  = await Preferences.get({ key: 'user' });    

    if(value){      
      const user = JSON.parse(value);
      return user
    }
    
  }
}
