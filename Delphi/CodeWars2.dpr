program CodeWars2;

uses
  QForms,
  Katas2 in 'Katas2.pas' {Kata},
  Mumblings in 'Mumblings.pas' {Mumbling};

{$R *.res}

begin
  Application.Initialize;
  //Application.CreateForm(TKata, Kata);
  Application.CreateForm(TMumbling, Mumbling);
  Application.Run;
end.
