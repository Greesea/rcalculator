// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001f\u0178\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0084",
    "\n\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u0088\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005\u0091\n\u0005\u0003\u0005\u0005\u0005\u0094\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0099\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u009e\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0005\b\u00a6\n\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00b1\n\u000b\u0003\u000b\u0005\u000b\u00b4",
    "\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b8\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00c2\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u00c7\n\u000e\u0005\u000e\u00c9\n\u000e\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00cd\n\u000f\u0003\u000f\u0005\u000f\u00d0\n\u000f\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00d4\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0006\u0012\u00d9\n\u0012\r\u0012\u000e\u0012\u00da\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00df\n\u0013\u0003\u0014\u0006\u0014\u00e2",
    "\n\u0014\r\u0014\u000e\u0014\u00e3\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00ea\n\u0016\u0003\u0016\u0005\u0016\u00ed",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0006\u0018\u00f2\n\u0018",
    "\r\u0018\u000e\u0018\u00f3\u0003\u0019\u0003\u0019\u0005\u0019\u00f8",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u0100\n\u001b\u0003\u001b\u0005\u001b\u0103",
    "\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0006\u001d\u0108\n\u001d",
    "\r\u001d\u000e\u001d\u0109\u0003\u001e\u0003\u001e\u0005\u001e\u010e",
    "\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0005 \u0116\n \u0003 \u0005 \u0119\n \u0003!\u0003!\u0003\"\u0006",
    "\"\u011e\n\"\r\"\u000e\"\u011f\u0003#\u0003#\u0005#\u0124\n#\u0003$",
    "\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003",
    ")\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003",
    ".\u0003.\u0003/\u0003/\u00030\u00030\u00030\u00031\u00031\u00031\u0003",
    "2\u00032\u00032\u00033\u00033\u00033\u00034\u00034\u00034\u00035\u0003",
    "5\u00035\u00036\u00036\u00036\u00037\u00037\u00037\u00038\u00038\u0003",
    "8\u00039\u00039\u00039\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003",
    ";\u0003;\u0003<\u0003<\u0007<\u0166\n<\f<\u000e<\u0169\u000b<\u0003",
    "=\u0003=\u0003=\u0003=\u0003>\u0006>\u0170\n>\r>\u000e>\u0171\u0003",
    "?\u0005?\u0175\n?\u0003?\u0003?\u0002\u0002@\u0003\u0003\u0005\u0004",
    "\u0007\u0002\t\u0002\u000b\u0002\r\u0002\u000f\u0002\u0011\u0002\u0013",
    "\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f",
    "\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002/\u00021\u0002",
    "3\u00025\u00027\u00029\u0002;\u0002=\u0002?\u0002A\u0002C\u0002E\u0002",
    "G\u0005I\u0006K\u0007M\bO\tQ\nS\u000bU\fW\rY\u000e[\u000f]\u0010_\u0011",
    "a\u0012c\u0013e\u0014g\u0015i\u0016k\u0017m\u0018o\u0019q\u001as\u001b",
    "u\u001cw\u001dy\u001e{\u0002}\u001f\u0003\u0002\u000f\u0004\u0002ZZ",
    "zz\u0004\u0002GGgg\u0004\u0002--//\u0004\u0002RRrr\u0003\u00023;\u0005",
    "\u00022;CHch\u0004\u0002QQqq\u0003\u000229\u0004\u0002DDdd\u0003\u0002",
    "23\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0004\u0002\u000b\u000b\"",
    "\"\u0002\u017b\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002",
    "\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002",
    "\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002",
    "\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002",
    "W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003",
    "\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002",
    "\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002",
    "\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002\u0002",
    "\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002",
    "m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003",
    "\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002",
    "\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002y\u0003\u0002\u0002",
    "\u0002\u0002}\u0003\u0002\u0002\u0002\u0003\u0083\u0003\u0002\u0002",
    "\u0002\u0005\u0087\u0003\u0002\u0002\u0002\u0007\u0089\u0003\u0002\u0002",
    "\u0002\t\u009d\u0003\u0002\u0002\u0002\u000b\u009f\u0003\u0002\u0002",
    "\u0002\r\u00a2\u0003\u0002\u0002\u0002\u000f\u00a5\u0003\u0002\u0002",
    "\u0002\u0011\u00a9\u0003\u0002\u0002\u0002\u0013\u00ab\u0003\u0002\u0002",
    "\u0002\u0015\u00b7\u0003\u0002\u0002\u0002\u0017\u00b9\u0003\u0002\u0002",
    "\u0002\u0019\u00bc\u0003\u0002\u0002\u0002\u001b\u00c8\u0003\u0002\u0002",
    "\u0002\u001d\u00ca\u0003\u0002\u0002\u0002\u001f\u00d3\u0003\u0002\u0002",
    "\u0002!\u00d5\u0003\u0002\u0002\u0002#\u00d8\u0003\u0002\u0002\u0002",
    "%\u00de\u0003\u0002\u0002\u0002\'\u00e1\u0003\u0002\u0002\u0002)\u00e5",
    "\u0003\u0002\u0002\u0002+\u00e7\u0003\u0002\u0002\u0002-\u00ee\u0003",
    "\u0002\u0002\u0002/\u00f1\u0003\u0002\u0002\u00021\u00f7\u0003\u0002",
    "\u0002\u00023\u00f9\u0003\u0002\u0002\u00025\u00fd\u0003\u0002\u0002",
    "\u00027\u0104\u0003\u0002\u0002\u00029\u0107\u0003\u0002\u0002\u0002",
    ";\u010d\u0003\u0002\u0002\u0002=\u010f\u0003\u0002\u0002\u0002?\u0113",
    "\u0003\u0002\u0002\u0002A\u011a\u0003\u0002\u0002\u0002C\u011d\u0003",
    "\u0002\u0002\u0002E\u0123\u0003\u0002\u0002\u0002G\u0125\u0003\u0002",
    "\u0002\u0002I\u0127\u0003\u0002\u0002\u0002K\u0129\u0003\u0002\u0002",
    "\u0002M\u012b\u0003\u0002\u0002\u0002O\u012d\u0003\u0002\u0002\u0002",
    "Q\u012f\u0003\u0002\u0002\u0002S\u0131\u0003\u0002\u0002\u0002U\u0133",
    "\u0003\u0002\u0002\u0002W\u0135\u0003\u0002\u0002\u0002Y\u0137\u0003",
    "\u0002\u0002\u0002[\u0139\u0003\u0002\u0002\u0002]\u013b\u0003\u0002",
    "\u0002\u0002_\u013d\u0003\u0002\u0002\u0002a\u0140\u0003\u0002\u0002",
    "\u0002c\u0143\u0003\u0002\u0002\u0002e\u0146\u0003\u0002\u0002\u0002",
    "g\u0149\u0003\u0002\u0002\u0002i\u014c\u0003\u0002\u0002\u0002k\u014f",
    "\u0003\u0002\u0002\u0002m\u0152\u0003\u0002\u0002\u0002o\u0155\u0003",
    "\u0002\u0002\u0002q\u0158\u0003\u0002\u0002\u0002s\u015b\u0003\u0002",
    "\u0002\u0002u\u015f\u0003\u0002\u0002\u0002w\u0163\u0003\u0002\u0002",
    "\u0002y\u016a\u0003\u0002\u0002\u0002{\u016f\u0003\u0002\u0002\u0002",
    "}\u0174\u0003\u0002\u0002\u0002\u007f\u0084\u0005\u001b\u000e\u0002",
    "\u0080\u0084\u0005)\u0015\u0002\u0081\u0084\u00053\u001a\u0002\u0082",
    "\u0084\u0005=\u001f\u0002\u0083\u007f\u0003\u0002\u0002\u0002\u0083",
    "\u0080\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0082\u0003\u0002\u0002\u0002\u0084\u0004\u0003\u0002\u0002\u0002\u0085",
    "\u0088\u0005\t\u0005\u0002\u0086\u0088\u0005\u0013\n\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0088\u0006",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u00072\u0002\u0002\u008a\u008b",
    "\t\u0002\u0002\u0002\u008b\u008c\u0005+\u0016\u0002\u008c\b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0005\u001d\u000f\u0002\u008e\u0090\u00070",
    "\u0002\u0002\u008f\u0091\u0005\u001d\u000f\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002",
    "\u0002\u0002\u0092\u0094\u0005\u000b\u0006\u0002\u0093\u0092\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u009e\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u00070\u0002\u0002\u0096\u0098\u0005\u001d",
    "\u000f\u0002\u0097\u0099\u0005\u000b\u0006\u0002\u0098\u0097\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009e\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0005\u001d\u000f\u0002\u009b\u009c\u0005\u000b",
    "\u0006\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u008d\u0003\u0002",
    "\u0002\u0002\u009d\u0095\u0003\u0002\u0002\u0002\u009d\u009a\u0003\u0002",
    "\u0002\u0002\u009e\n\u0003\u0002\u0002\u0002\u009f\u00a0\u0005\r\u0007",
    "\u0002\u00a0\u00a1\u0005\u000f\b\u0002\u00a1\f\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\t\u0003\u0002\u0002\u00a3\u000e\u0003\u0002\u0002\u0002",
    "\u00a4\u00a6\u0005\u0011\t\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0005\u001d\u000f\u0002\u00a8\u0010\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\t\u0004\u0002\u0002\u00aa\u0012\u0003\u0002\u0002\u0002",
    "\u00ab\u00ac\u0005\u0015\u000b\u0002\u00ac\u00ad\u0005\u0017\f\u0002",
    "\u00ad\u0014\u0003\u0002\u0002\u0002\u00ae\u00b0\u0005\u0007\u0004\u0002",
    "\u00af\u00b1\u00070\u0002\u0002\u00b0\u00af\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b8\u0003\u0002\u0002\u0002",
    "\u00b2\u00b4\u0005\u0007\u0004\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u00070\u0002\u0002\u00b6\u00b8\u0005+\u0016\u0002\u00b7",
    "\u00ae\u0003\u0002\u0002\u0002\u00b7\u00b3\u0003\u0002\u0002\u0002\u00b8",
    "\u0016\u0003\u0002\u0002\u0002\u00b9\u00ba\u0005\u0019\r\u0002\u00ba",
    "\u00bb\u0005\u000f\b\u0002\u00bb\u0018\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\t\u0005\u0002\u0002\u00bd\u001a\u0003\u0002\u0002\u0002\u00be",
    "\u00c9\u00072\u0002\u0002\u00bf\u00c6\u0005!\u0011\u0002\u00c0\u00c2",
    "\u0005\u001d\u000f\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0003\u0002\u0002\u0002\u00c2\u00c7\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0005\'\u0014\u0002\u00c4\u00c5\u0005\u001d\u000f\u0002\u00c5\u00c7",
    "\u0003\u0002\u0002\u0002\u00c6\u00c1\u0003\u0002\u0002\u0002\u00c6\u00c3",
    "\u0003\u0002\u0002\u0002\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00be",
    "\u0003\u0002\u0002\u0002\u00c8\u00bf\u0003\u0002\u0002\u0002\u00c9\u001c",
    "\u0003\u0002\u0002\u0002\u00ca\u00cf\u0005\u001f\u0010\u0002\u00cb\u00cd",
    "\u0005#\u0012\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0",
    "\u0005\u001f\u0010\u0002\u00cf\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0003\u0002\u0002\u0002\u00d0\u001e\u0003\u0002\u0002\u0002\u00d1\u00d4",
    "\u00072\u0002\u0002\u00d2\u00d4\u0005!\u0011\u0002\u00d3\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4 \u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\t\u0006\u0002\u0002\u00d6\"\u0003\u0002",
    "\u0002\u0002\u00d7\u00d9\u0005%\u0013\u0002\u00d8\u00d7\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db$\u0003\u0002",
    "\u0002\u0002\u00dc\u00df\u0005\u001f\u0010\u0002\u00dd\u00df\u0007a",
    "\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00dd\u0003\u0002",
    "\u0002\u0002\u00df&\u0003\u0002\u0002\u0002\u00e0\u00e2\u0007a\u0002",
    "\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002",
    "\u0002\u00e4(\u0003\u0002\u0002\u0002\u00e5\u00e6\u0005\u0007\u0004",
    "\u0002\u00e6*\u0003\u0002\u0002\u0002\u00e7\u00ec\u0005-\u0017\u0002",
    "\u00e8\u00ea\u0005/\u0018\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002",
    "\u00eb\u00ed\u0005-\u0017\u0002\u00ec\u00e9\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed,\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\t\u0007\u0002\u0002\u00ef.\u0003\u0002\u0002\u0002\u00f0",
    "\u00f2\u00051\u0019\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0003\u0002\u0002\u0002\u00f40\u0003\u0002\u0002\u0002\u00f5",
    "\u00f8\u0005-\u0017\u0002\u00f6\u00f8\u0007a\u0002\u0002\u00f7\u00f5",
    "\u0003\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f82",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u00072\u0002\u0002\u00fa\u00fb",
    "\t\b\u0002\u0002\u00fb\u00fc\u00055\u001b\u0002\u00fc4\u0003\u0002\u0002",
    "\u0002\u00fd\u0102\u00057\u001c\u0002\u00fe\u0100\u00059\u001d\u0002",
    "\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002",
    "\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0103\u00057\u001c\u0002",
    "\u0102\u00ff\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u01036\u0003\u0002\u0002\u0002\u0104\u0105\t\t\u0002\u0002\u01058\u0003",
    "\u0002\u0002\u0002\u0106\u0108\u0005;\u001e\u0002\u0107\u0106\u0003",
    "\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u0107\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a:\u0003",
    "\u0002\u0002\u0002\u010b\u010e\u00057\u001c\u0002\u010c\u010e\u0007",
    "a\u0002\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010c\u0003",
    "\u0002\u0002\u0002\u010e<\u0003\u0002\u0002\u0002\u010f\u0110\u0007",
    "2\u0002\u0002\u0110\u0111\t\n\u0002\u0002\u0111\u0112\u0005? \u0002",
    "\u0112>\u0003\u0002\u0002\u0002\u0113\u0118\u0005A!\u0002\u0114\u0116",
    "\u0005C\"\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0119\u0005",
    "A!\u0002\u0118\u0115\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002",
    "\u0002\u0002\u0119@\u0003\u0002\u0002\u0002\u011a\u011b\t\u000b\u0002",
    "\u0002\u011bB\u0003\u0002\u0002\u0002\u011c\u011e\u0005E#\u0002\u011d",
    "\u011c\u0003\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120",
    "D\u0003\u0002\u0002\u0002\u0121\u0124\u0005A!\u0002\u0122\u0124\u0007",
    "a\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0122\u0003",
    "\u0002\u0002\u0002\u0124F\u0003\u0002\u0002\u0002\u0125\u0126\u0007",
    ".\u0002\u0002\u0126H\u0003\u0002\u0002\u0002\u0127\u0128\u0007*\u0002",
    "\u0002\u0128J\u0003\u0002\u0002\u0002\u0129\u012a\u0007+\u0002\u0002",
    "\u012aL\u0003\u0002\u0002\u0002\u012b\u012c\u0007?\u0002\u0002\u012c",
    "N\u0003\u0002\u0002\u0002\u012d\u012e\u0007-\u0002\u0002\u012eP\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u0007/\u0002\u0002\u0130R\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0007,\u0002\u0002\u0132T\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u00071\u0002\u0002\u0134V\u0003\u0002\u0002\u0002",
    "\u0135\u0136\u0007\'\u0002\u0002\u0136X\u0003\u0002\u0002\u0002\u0137",
    "\u0138\u0007(\u0002\u0002\u0138Z\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0007~\u0002\u0002\u013a\\\u0003\u0002\u0002\u0002\u013b\u013c\u0007",
    "`\u0002\u0002\u013c^\u0003\u0002\u0002\u0002\u013d\u013e\u0007>\u0002",
    "\u0002\u013e\u013f\u0007>\u0002\u0002\u013f`\u0003\u0002\u0002\u0002",
    "\u0140\u0141\u0007@\u0002\u0002\u0141\u0142\u0007@\u0002\u0002\u0142",
    "b\u0003\u0002\u0002\u0002\u0143\u0144\u0007-\u0002\u0002\u0144\u0145",
    "\u0007?\u0002\u0002\u0145d\u0003\u0002\u0002\u0002\u0146\u0147\u0007",
    "/\u0002\u0002\u0147\u0148\u0007?\u0002\u0002\u0148f\u0003\u0002\u0002",
    "\u0002\u0149\u014a\u0007,\u0002\u0002\u014a\u014b\u0007?\u0002\u0002",
    "\u014bh\u0003\u0002\u0002\u0002\u014c\u014d\u00071\u0002\u0002\u014d",
    "\u014e\u0007?\u0002\u0002\u014ej\u0003\u0002\u0002\u0002\u014f\u0150",
    "\u0007\'\u0002\u0002\u0150\u0151\u0007?\u0002\u0002\u0151l\u0003\u0002",
    "\u0002\u0002\u0152\u0153\u0007(\u0002\u0002\u0153\u0154\u0007?\u0002",
    "\u0002\u0154n\u0003\u0002\u0002\u0002\u0155\u0156\u0007~\u0002\u0002",
    "\u0156\u0157\u0007?\u0002\u0002\u0157p\u0003\u0002\u0002\u0002\u0158",
    "\u0159\u0007`\u0002\u0002\u0159\u015a\u0007?\u0002\u0002\u015ar\u0003",
    "\u0002\u0002\u0002\u015b\u015c\u0007>\u0002\u0002\u015c\u015d\u0007",
    ">\u0002\u0002\u015d\u015e\u0007?\u0002\u0002\u015et\u0003\u0002\u0002",
    "\u0002\u015f\u0160\u0007@\u0002\u0002\u0160\u0161\u0007@\u0002\u0002",
    "\u0161\u0162\u0007?\u0002\u0002\u0162v\u0003\u0002\u0002\u0002\u0163",
    "\u0167\t\f\u0002\u0002\u0164\u0166\t\r\u0002\u0002\u0165\u0164\u0003",
    "\u0002\u0002\u0002\u0166\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003",
    "\u0002\u0002\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0168x\u0003",
    "\u0002\u0002\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u016b\u0005",
    "{>\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d\b=\u0002\u0002",
    "\u016dz\u0003\u0002\u0002\u0002\u016e\u0170\t\u000e\u0002\u0002\u016f",
    "\u016e\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171",
    "\u016f\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172",
    "|\u0003\u0002\u0002\u0002\u0173\u0175\u0007\u000f\u0002\u0002\u0174",
    "\u0173\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175",
    "\u0176\u0003\u0002\u0002\u0002\u0176\u0177\u0007\f\u0002\u0002\u0177",
    "~\u0003\u0002\u0002\u0002%\u0002\u0083\u0087\u0090\u0093\u0098\u009d",
    "\u00a5\u00b0\u00b3\u00b7\u00c1\u00c6\u00c8\u00cc\u00cf\u00d3\u00da\u00de",
    "\u00e3\u00e9\u00ec\u00f3\u00f7\u00ff\u0102\u0109\u010d\u0115\u0118\u011f",
    "\u0123\u0167\u0171\u0174\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function rcLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

rcLexer.prototype = Object.create(antlr4.Lexer.prototype);
rcLexer.prototype.constructor = rcLexer;

Object.defineProperty(rcLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

rcLexer.EOF = antlr4.Token.EOF;
rcLexer.IntegerLiteral = 1;
rcLexer.FloatingPointLiteral = 2;
rcLexer.COMMA = 3;
rcLexer.LPAREN = 4;
rcLexer.RPAREN = 5;
rcLexer.ASSIGN = 6;
rcLexer.ADD = 7;
rcLexer.SUB = 8;
rcLexer.MUL = 9;
rcLexer.DIV = 10;
rcLexer.MOD = 11;
rcLexer.BITAND = 12;
rcLexer.BITOR = 13;
rcLexer.CARET = 14;
rcLexer.LSHIFT = 15;
rcLexer.RSHIFT = 16;
rcLexer.ADD_ASSIGN = 17;
rcLexer.SUB_ASSIGN = 18;
rcLexer.MUL_ASSIGN = 19;
rcLexer.DIV_ASSIGN = 20;
rcLexer.MOD_ASSIGN = 21;
rcLexer.AND_ASSIGN = 22;
rcLexer.OR_ASSIGN = 23;
rcLexer.XOR_ASSIGN = 24;
rcLexer.LSHIFT_ASSIGN = 25;
rcLexer.RSHIFT_ASSIGN = 26;
rcLexer.Identifier = 27;
rcLexer.SKIP_ = 28;
rcLexer.NEWLINE = 29;

rcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

rcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

rcLexer.prototype.literalNames = [ null, null, null, "','", "'('", "')'", 
                                   "'='", "'+'", "'-'", "'*'", "'/'", "'%'", 
                                   "'&'", "'|'", "'^'", "'<<'", "'>>'", 
                                   "'+='", "'-='", "'*='", "'/='", "'%='", 
                                   "'&='", "'|='", "'^='", "'<<='", "'>>='" ];

rcLexer.prototype.symbolicNames = [ null, "IntegerLiteral", "FloatingPointLiteral", 
                                    "COMMA", "LPAREN", "RPAREN", "ASSIGN", 
                                    "ADD", "SUB", "MUL", "DIV", "MOD", "BITAND", 
                                    "BITOR", "CARET", "LSHIFT", "RSHIFT", 
                                    "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
                                    "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", 
                                    "OR_ASSIGN", "XOR_ASSIGN", "LSHIFT_ASSIGN", 
                                    "RSHIFT_ASSIGN", "Identifier", "SKIP_", 
                                    "NEWLINE" ];

rcLexer.prototype.ruleNames = [ "IntegerLiteral", "FloatingPointLiteral", 
                                "HexNumeral", "DecimalFloatingPointLiteral", 
                                "ExponentPart", "ExponentIndicator", "SignedInteger", 
                                "Sign", "HexadecimalFloatingPointLiteral", 
                                "HexSignificand", "BinaryExponent", "BinaryExponentIndicator", 
                                "DecimalIntegerLiteral", "Digits", "Digit", 
                                "NonZeroDigit", "DigitsAndUnderscores", 
                                "DigitOrUnderscore", "Underscores", "HexIntegerLiteral", 
                                "HexDigits", "HexDigit", "HexDigitsAndUnderscores", 
                                "HexDigitOrUnderscore", "OctalIntegerLiteral", 
                                "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
                                "OctalDigitOrUnderscore", "BinaryIntegerLiteral", 
                                "BinaryDigits", "BinaryDigit", "BinaryDigitsAndUnderscores", 
                                "BinaryDigitOrUnderscore", "COMMA", "LPAREN", 
                                "RPAREN", "ASSIGN", "ADD", "SUB", "MUL", 
                                "DIV", "MOD", "BITAND", "BITOR", "CARET", 
                                "LSHIFT", "RSHIFT", "ADD_ASSIGN", "SUB_ASSIGN", 
                                "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
                                "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
                                "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "Identifier", 
                                "SKIP_", "SPACES", "NEWLINE" ];

rcLexer.prototype.grammarFileName = "rc.g4";


exports.rcLexer = rcLexer;
