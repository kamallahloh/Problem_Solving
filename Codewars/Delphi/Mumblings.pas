unit Mumblings;

interface

uses
  SysUtils, Types, Classes, Variants, QControls, QStdCtrls;


type
  TMumbling = class(TForm)
    Label1: TLabel;

    function Accum (s: string): string;
    function LoCase(ch: AnsiChar): AnsiChar;
    function UpCase(ch: AnsiChar): AnsiChar;
    procedure FormActivate(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Mumbling: TMumbling;

implementation

{$R *.xfm}

function TMumbling.Accum (s: string): string;
var
  I,J,L: Integer;
  A,B,C: String;
  X,Y,Z: Extended;

begin
  A := UpCase(s[1]);

  L := Length(s);

  For I:=2 to L Do
    Begin
      B := UpCase(s[I]);

      For J:=1 to I-1 Do
        Begin
           B :=  B + s[I];
        End;

      A := A + '-' + B;

    End;

  Result := A;
end;

procedure TMumbling.FormActivate(Sender: TObject);
begin
    Label1.Caption := '';
    Label1.Caption := 'A-Bb-Ccc-Dddd ==> ' + Accum('Abcd'); // 0/14
end;


{function TMumbling.LoCase(ch: AnsiChar): AnsiChar;
begin
  case ch of
  'A'..'Z':
    Result := AnsiChar(Ord(ch) + Ord('a')-Ord('A'));
  else
    Result := ch;
  end;
end;

function TMumbling.UpCase(ch: AnsiChar): AnsiChar;
begin
  case ch of
  'a'..'z':
    Result := AnsiChar(Ord(ch) + Ord('A')-Ord('a'));
  else
    Result := ch;
  end;
end; }

end.





{

unit Kata;

interface

function Accum (s: string): string;
    
implementation

function Accum (s: string): string;
var
  I,J,L: Integer;
  A,B: String;

begin
  A := UpCase(s[1]);

  L := Length(s);

  For I:=2 to L Do
    Begin
      B := UpCase(s[I]);

      For J:=1 to I-1 Do
        Begin
           B :=  B + LowerCase(s[I]);
        End;

      A := A + '-' + B;

    End;

  Result := A;
end;
end.

}

