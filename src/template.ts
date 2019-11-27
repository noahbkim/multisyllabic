import {Document, AlignmentType, Paragraph, TextRun, IStylesOptions} from 'docx';

export class SyllabusDocument {

  public static styles: IStylesOptions = {
    paragraphStyles: [
      {
        id: "CourseDescription.header"

      }
    ]
  };

  public static create(): Document {
    return new Document({styles: SyllabusDocument.styles});
  }

}

export class CourseDescription {

  public static header(): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({text: '[Course Name]', bold: true}).break(),
        new TextRun({text: '[Course ID]'}).break(),
        new TextRun({text: '[Semester]'}).break(),
        new TextRun({text: '[Session meeting days and times]'}).break(),
        new TextRun({text: '[Location]'}).break(),
        new TextRun({text: 'American University'}).break(),
      ],
      alignment: AlignmentType.CENTER
    });
  }

  public static instructor(): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({text: 'Instructor Information', bold: true}).break(),
        new TextRun({text: '[Name]'}).break(),
        new TextRun({text: 'Email:'}).break(),
        new TextRun({text: 'Office (or preferred, public meeting space on campus e.g., library, Mary Graydon Center):'}).break(),
        new TextRun({text: 'Instructor’s Phone:'}).break(),
        new TextRun({text: 'Skype Account:'}).break(),
        new TextRun({text: 'You Can Book Me:'}).break(),
        new TextRun({text: 'Office Hours (or times of day available/not available; by appointment; online office hours):'}).break(),
        new TextRun({text: 'Preferred Communication Method (e.g., email, phone, Skype, Blackboard):'}).break(),
        new TextRun({text: 'Response Time for Questions:'}).break(),
        new TextRun({text: 'Campus Mailbox:'}).break(),
        new TextRun({text: 'Instructor Bio:'}).break(),
      ],
    });
  }
}
