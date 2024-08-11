program IsPangramDpr;

uses
  Forms,
  IsPangrams in 'IsPangrams.pas' {IsPangram};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(TIsPangram, IsPangram);
  Application.Run;
end.
