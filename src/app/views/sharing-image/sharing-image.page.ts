import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Camera, CameraResultType}from '@capacitor/camera';

@Component({
  selector: 'app-sharing-image',
  templateUrl: './sharing-image.page.html',
  styleUrls: ['./sharing-image.page.scss'],
})
export class SharingImagePage implements OnInit {
    chemin : string | undefined;
    chemin2: string | undefined;
    list_image: String[]  = [];
  imageBase64!: string | String;
    
   constructor( private socialSharing:SocialSharing) { }
   handleShare(image: any){
     this.socialSharing.share("Message: salut","titre: mon image", image)
     .then(res=>
       {console.log("Launched views", res)})
       .catch(err=>
         {console.log("Error launching views", err)
     });
 
   }
    async getImage(){
     const image= await Camera.getPhoto ({
     quality:90,
     allowEditing:true,
     resultType: CameraResultType.Base64
 
     });
    
 
     var imageUrl= "data: image/png;base64,"+image.base64String;//recupere l'image en string
     this.imageBase64= imageUrl;
     console.log(image);
     this.chemin2 = imageUrl;
     this.list_image.push(this.imageBase64)// met l'image enregistre dans le tableau
 
     
   }

  ngOnInit() {
  }

}
