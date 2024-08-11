unit IsPangrams;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls;

type
  TIsPangram = class(TForm)
    Label1: TLabel;
    procedure FormShow(Sender: TObject);
  function IsPangram (s: string): boolean;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  IsPangram: TIsPangram;

implementation

uses Math, StrUtils;

{$R *.dfm}

function TIsPangram.IsPangram (s: string): boolean;
const
  List : array[1..13] of string = ('a','b','c','d','e','f','g','h','i','j','k','l','m');
begin


  IsPangram := false;
end;

procedure TIsPangram.FormShow(Sender: TObject);
begin

  Label1.Caption := IfThen(IsPangram('AbCdEfGhIjKlM zYxWvUtSrQpOn'),'Is Pangram','Is not Pangram');
end;

end.
