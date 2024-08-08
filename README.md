# Task Manager

A simple task manager web application to keep track of your to-do list. The app allows users to add, mark as complete, and delete tasks. It provides form validation to ensure tasks are not empty and offers a user-friendly interface.
![am I responsive screenshoot](assets/images/features/amIResponsive.png)

## Features
- Header

 > Featured at the top of the page, the header shows the project name Task Manager.

 > ![Header](assets/images/features/header.png)
- Add new tasks
- Mark tasks as completed
- Delete tasks

  >  ![All features](assets/images/features/completedTasks.png)

- Form validation for empty task input


    > ![Form Validation](assets/images/features/formValidation.png)

- Footer

   > ![Footer](assets/images/features/footer.png)

  


## Technologies Used

  - HTML
  - CSS
  - JavaScript
  - [Font Awesome](https://fontawesome.com/) for icons
  - [Google fonts](https://www.googlefonts.com)

## Usage

1. Enter a task in the input field.
2. Click the "Add Task" button to add the task to the list.
3. Click the check icon to mark a task as completed.
4. Click the trash icon to delete a task.
5. If the input field is empty, an error message will be displayed, and the task will not be added.

# Wireframes
- I sketched the wireframes using my pen and white paper. 

## User Stories and UX Design Choices
### User Stories
1. As a user, I want to add tasks so that I can keep track of my to-do list.
2. As a user, I want to mark tasks as completed so that I can see what I have accomplished.
3. As a user, I want to delete tasks so that I can remove items that are no longer needed.
4. As a user, I want to receive feedback when I try to add an empty task so that I understand why it wasn't added.
### UX Design Choices
#### Form Validation: 
- Implemented form validation to improve user experience by preventing the addition of empty tasks.
#### Responsive Design: 
- Used media queries to ensure the application is usable on different screen sizes.
#### Visual Feedback: 
- Used visual cues (e.g., line-through for completed tasks) to provide clear feedback to the user.

## Testing

### JSHint Results

 > I passed the JavaScript code through JSHint to ensure the code quality. Here are the results:
 - No error found

   ![JSHint](assets/images/testing/jsHint.png)


## Manual Testing
 

> The application was manually tested on different devices and browsers to ensure compatibility and responsiveness. Here are the steps I followed:

### Add Task:
- Entered a task and clicked "Add Task". The task was added to the list.

### Complete Task:
- Clicked the checkmark button next to a task. The task was marked as completed.

### Delete Task:
- Clicked the trash can button next to a task. The task was removed from the list.

### Form Validation:
- Tried to add an empty task. An error message was displayed.

## Google Lighthouse Testing


> ![google lighthouse](assets/images/testing/lightHouse.png)

## HTML Validation

### index.html

  > ![W3 html Check](assets/images/testing/htmlValidation.png)

#### Result: No Errors


## CSS Validation

  > ![W3 style.css Check](assets/images/testing/cssValidation.png)

#### Result: No Errors

## Deployment

> To deploy the project I followed these steps starting from the main project repository [here](https://mabuhanif.github.io/toDo-list/).

 1. Clicked on `Settings` on the navigation menu in the repository
 2. I then selected the `Pages` menu on the side bar.
 3. In the first dropdown menu labeled `Source` I selected the branch of the name `main` from the dropdown.
 4. In the next dropdown labeled `/root` I left as the default option.
 5. Selected Save
 
> I then received a notification from GitHub that my project is being deployed and after about 1 minute & a couple of refreshes of the page it was ready and live.

The live link can be found here - https://mabuhanif.github.io/toDo-list/

## Acknowledgements

> Font Awesome for icons