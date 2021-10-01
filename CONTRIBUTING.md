Guidelines for contribution
The steps to contribute to this repo. For more info visit the github docs https://github.com/github/docs/blob/main/CONTRIBUTING.md

Step 0: Find an issue(any issue which you are comfortable with.

Step 1: Fork the repository. 

![Screenshot 2021-10-01 at 9 15 02 PM](https://user-images.githubusercontent.com/68785131/135650068-9c63cef4-3d05-4fd2-bf0a-d50a3365fbe7.png)


   this will create a local copy in your github profile.
  
Step 2: Clone this forked repository. Keep a reference to the original project in upstream remote. 

         $ git clone https://github.com/<your-username>/<repo-name>
         $ cd <repo-name>
         $ git remote add upstream https://github.com/Design-and-Code/Linkify.git
  
        //Check the remotes using:
        
         $ git remote -v   
  
Step 3: It is always advised to create a new branch and make changes in these branches rather than the main branch.

         $ git branch <name of branch>
         $ git checkout <name of branch>
  
Step 4: Work on your code.
  
Step 5: After you have made changes, add changes to the branch you have created.
        
        $ git add .
        
Step 6: Now commit your changes 
       
       $ git commit -m " commit message "
                      
    
Step 7: Now you are ready to push your changes to the remote repository.
   
       $ git push -u origin <your branch name>

       
Step 8: Now go to your forked repository in your github account. Click on Compare and pull


![Screenshot 2021-10-01 at 9 15 02 PM](https://user-images.githubusercontent.com/68785131/135649757-c0862fd5-778c-4430-8c4d-b278565db89d.png)

You now have a pull request. Please wait till your pull request is reviewed and merged. Please check the comments, this will give you better insights about your PR.

     

    
