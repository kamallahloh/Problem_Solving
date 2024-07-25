program CodeWars;

uses
  Forms,
  Katas in 'Katas.pas' {Kata};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(TKata, Kata);
  Application.Run;
end.
