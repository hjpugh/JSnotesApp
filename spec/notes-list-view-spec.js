describe("Notes List View", function() {
  // beforeEach(function() {
  //   nl = notesList()
  //   nl.addNote("hello1")
  //   nl.addNote("hello2")
  //   nlv = notesListView(nl);
  // });

  describe(".viewNotesList", function() {
    it("shows list in view format", function() {
      nl = notesList();
      nl.addNote("hello1");
      nl.addNote("hello2");
      nlv = notesListView(nl);

      expect(nlv.viewNotesList()[0].content).toEqual("hello1");
      expect(nlv.viewNotesList()[1].content).toEqual("hello2");
    });

    // expect().toEqual(2)
    //   expect(nlv.viewNotesList().toEqual([]))
    // //     "<ul><li><div>hello1</div></li><li><div>hello2</div></li></ul>"))
  });
});
