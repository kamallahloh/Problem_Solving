program CodeWars2;

uses
  QForms,
  Katas2 in 'Katas2.pas' {Kata};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(TKata, Kata);
  Application.Run;
end.
